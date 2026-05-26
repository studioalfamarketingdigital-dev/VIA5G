import { createFileRoute } from "@tanstack/react-router";

type Msg = { role: "user" | "assistant"; content: string };

const SYSTEM = `Você é o Assistente VIA, da operadora digital brasileira VIA — uma operadora móvel da nova geração focada em jovens, creators, gamers e quem vive conectado.

Tom: moderno, direto, premium, brasileiro descontraído. Responda sempre em português do Brasil. Seja conciso (no máximo 4-6 frases curtas), use emojis com moderação.

A VIA oferece planos móveis 5G/LTE, app digital, ativação 100% digital, cobertura nacional, suporte digital, gestão inteligente de consumo e recursos automatizados.

Planos disponíveis:
- VIA Free — R$ 29/mês, 10 GB, para começar.
- VIA Stream — R$ 59/mês, 30 GB, bônus de fim de semana.
- VIA Gamer — R$ 89/mês, 60 GB, modo gamer com prioridade de rede.
- VIA Plus — R$ 129/mês, 120 GB, ecossistema completo.

Regras importantes (NUNCA quebre):
- NÃO prometa internet ilimitada, redes sociais ilimitadas, streaming grátis sem parceria oficial, IA proprietária exclusiva, cobertura absoluta, nem "melhor internet do Brasil".
- Velocidade 5G/LTE pode variar por localidade e dispositivo. Após a franquia, pode haver redução de velocidade.
- Quando não souber, oriente o usuário a falar com o suporte pelo app VIA.
- Não invente benefícios que não estão na lista acima.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: Msg[] };
          const messages = Array.isArray(body.messages) ? body.messages : [];
          if (messages.length === 0) {
            return Response.json({ error: "messages required" }, { status: 400 });
          }
          const key = process.env.ANTHROPIC_API_KEY;
          if (!key) {
            return Response.json({ error: "Missing ANTHROPIC_API_KEY" }, { status: 500 });
          }

          const cleaned = messages
            .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
            .slice(-20)
            .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

          const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "x-api-key": key,
              "anthropic-version": "2023-06-01",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              model: "claude-sonnet-4-5",
              max_tokens: 600,
              system: SYSTEM,
              messages: cleaned,
            }),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error("Anthropic error", res.status, errText);
            return Response.json({ error: "AI provider error" }, { status: 502 });
          }
          const data = (await res.json()) as {
            content?: Array<{ type: string; text?: string }>;
          };
          const reply =
            data.content?.filter((c) => c.type === "text").map((c) => c.text || "").join("\n").trim() ||
            "Desculpe, não consegui formular uma resposta.";
          return Response.json({ reply });
        } catch (err) {
          console.error(err);
          return Response.json({ error: "Internal error" }, { status: 500 });
        }
      },
    },
  },
});
