import { useState } from "react";

export default function TrickyButtons() {
  const [pos, setPos] = useState({ top: "50%", left: "50%" });
  const [submitted, setSubmitted] = useState(false);

  // Moves the Submit button randomly
  const handleSubmitClick = () => {
    const top = Math.random() * 80 + 10; // 10% - 90%
    const left = Math.random() * 80 + 10;
    setPos(` top: ${top}%, left: ${left}% `);
  };

  // Handles Exit button click
  const handleExitClick = () => {
    setSubmitted(true);
    alert("Form submitted! Entering main website...");
    // You can redirect using window.location if needed
    // window.location.href = "/home";
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black text-white">
      {!submitted && (
        <>
          {/* Submit Button (moves away) */}
          <button
            onClick={handleSubmitClick}
            className="absolute px-6 py-3 bg-red-700 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
            style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
          >
            Submit
          </button>

          {/* Exit Button (submits) */}
          <button
            onClick={handleExitClick}
            className="absolute bottom-10 px-6 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-500 transition-all duration-300"
          >
            Exit
          </button>
        </>
      )}

      {submitted && (
        <div className="text-2xl font-bold text-green-400">
          Welcome to the main website! 🎉
        </div>
      )}
</div>
);
}