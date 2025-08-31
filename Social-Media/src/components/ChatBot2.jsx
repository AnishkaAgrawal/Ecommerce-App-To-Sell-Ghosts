import { useState } from "react";

export default function ChatbaseBot() {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("💀");

  const toggleChat = () => {
    setOpen(!open);
    setIcon(open ? "💀" : "❌");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      {/* Skull Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-black border-2 border-white shadow-[0_0_20px_#ff0000] flex items-center justify-center hover:scale-110 transition-transform duration-300 pointer-events-auto"
      >
        {icon}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="mt-3 mt-3 w-[600px] h-[600px] bg-black border border-red-700 rounded-2xl shadow-[0_0_35px_#ff0000] overflow-hidden transform transition-all duration-500 pointer-events-auto">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/sDzRySRgwVF_KPofOZYFM"
            title="GhostBot"
            className="w-full h-full"
            frameBorder="0"
          />
        </div>
      )}
</div>
);
}