import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Oi! Eu sou o assistente da VIA 👋 Posso te ajudar com planos, cobertura, app ou ativação. O que você quer saber?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erro");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Não consegui responder agora. Tente novamente em instantes." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-[#7B2EFF] to-[#5b1ad0] flex items-center justify-center neon-glow hover:scale-110 transition-transform"
        aria-label="Assistente VIA"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[600px] glass-strong rounded-3xl flex flex-col overflow-hidden animate-fade-up neon-glow-soft">
          <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#7B2EFF] to-[#3a0d8a] flex items-center justify-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="font-display font-semibold text-sm">Assistente VIA</div>
              <div className="text-[10px] text-[#B79BFF] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7B2EFF] animate-pulse" /> Online
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-[#7B2EFF] to-[#5b1ad0] text-white rounded-br-sm"
                      : "bg-white/5 border border-white/10 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#B79BFF]"
                      style={{ animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10">
            <div className="flex items-end gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-2 focus-within:border-[#7B2EFF]/50 transition">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Pergunte sobre planos, cobertura..."
                rows={1}
                className="flex-1 bg-transparent resize-none text-sm outline-none placeholder:text-muted-foreground max-h-32"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#7B2EFF] to-[#5b1ad0] flex items-center justify-center disabled:opacity-40 hover:scale-105 transition"
                aria-label="Enviar"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
