import { useState } from "react";

export default function ChatbaseBot() {
  const [open, setOpen] = useState(false);
  
  const [text , settext] = useState("💀")
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Skull Button */}
      <button
        onClick={() =>{
          setOpen(!open);
          if(open==false){
            settext("❌");
          }else{
            settext("💀");
          }
          
        } }
        className={`"w-14 h-14 rounded-full bg-black border-2 border-white
                   shadow-[0_0_20px_#ff0000] flex items-center justify-center
                   hover:scale-110 transition-transform duration-300 ${!open ? "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-black border-2 border-white shadow-[0_0_20px_#ff0000] flex items-center justify-center hover:scale-110 transition-transform duration-300" : "w-14 h-14  opacity-100 pointer-events-none"}"`}
      >
        {text}
      </button>

      {/* Chat Window */}
      <div
        className={`mt-3 w-160 h-160 bg-black border border-red-700 rounded-2xl 
                    shadow-[0_0_35px_#ff0000] overflow-hidden transform transition-all duration-500
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
      >
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/sDzRySRgwVF_KPofOZYFM"
          title="GhostBot"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
