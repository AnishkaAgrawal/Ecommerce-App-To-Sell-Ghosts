// pages/ghost-order.jsx  (or /GhostOrder.jsx depending on your setup)
import React from "react";

export default function GhostOrder() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-950 to-red-950 text-white">
      <h1 className="text-4xl mb-4 animate-pulse">Your soul, please… just kidding! Take it for free, brave one 💀
      </h1>
      <p className="text-xl mb-6">🎉 Your ghost has been summoned! 👻!</p>
     
      <button
        onClick={() => window.location.href = "/"} // redirect home
        className="
          mt-8 px-8 py-4 
          bg-red-900 text-white font-bold 
          rounded-full 
          shadow-[0_0_20px_#ff0000] 
          hover:shadow-[0_0_50px_#ff0000] 
          animate-pulse 
          
          transform hover:-translate-y-1 
          transition-all 
          border-2 border-white/30
          tracking-widest
          text-lg
          hover:text-red-300
        "
      >
        🩸 Go Home… if you dare
      </button>
    </div>
  );
}
