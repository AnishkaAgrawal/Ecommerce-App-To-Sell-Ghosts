import { useState } from "react";
import { Ghost } from "lucide-react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👻 Welcome, mortal... how can I haunt your shopping?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // TODO: Add AI/response logic here
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-red-800 
        text-white flex items-center justify-center 
        shadow-[0_0_15px_#ff0000] hover:shadow-[0_0_25px_#ff0000]
        transition-all"
      >
        <Ghost size={28} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="mt-4 w-80 h-96 bg-black/80 border border-red-700 
        rounded-2xl shadow-[0_0_25px_#ff0000] flex flex-col">
          {/* Header */}
          <div className="p-3 bg-red-900 text-white text-lg font-bold 
          rounded-t-2xl">
            👻 GhostBot
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-red-800 text-white self-start"
                    : "bg-gray-700 text-green-300 self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-2 border-t border-red-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-black/60 text-white px-3 py-2 rounded-lg 
              border border-red-700 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Whisper here..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-red-800 rounded-lg text-white 
              hover:bg-red-600 shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_20px_#ff0000] 
              transition-all"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
