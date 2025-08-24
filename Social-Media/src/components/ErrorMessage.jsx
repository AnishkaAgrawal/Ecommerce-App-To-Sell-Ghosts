// ErrorMessage.jsx
const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center h-[50vh] px-4 bg-black relative overflow-hidden">
      {/* Misty background */}
      <div className="absolute inset-0 bg-[url('/images/mist.png')] bg-cover opacity-10 animate-pulse" />

      {/* Message Box */}
      <div className="bg-black/70 border border-red-800 text-red-500 px-8 py-6 rounded-2xl shadow-[0_0_25px_#ff0000] text-center max-w-xl relative z-10 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold mb-4 glitch spooky-heading">
          ☠️ No Items Available ☠️
        </h1>
        <p className="text-sm text-gray-300 spooky-desc animate-pulse">
          The shelves are empty... <br />
          Something dark is keeping them away 🩸
        </p>
      </div>

      {/* Floating skulls / ambience */}
      <div className="absolute top-6 left-10 text-red-700 text-3xl animate-bounce-slow">💀</div>
      <div className="absolute bottom-10 right-16 text-red-700 text-4xl animate-bounce-slow">🩸</div>
    </div>
  );
};

export default ErrorMessage;
