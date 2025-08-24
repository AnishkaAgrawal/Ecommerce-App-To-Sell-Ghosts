import { Link } from "react-router-dom";

const ErrorMessageForAddToCart = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 mt-10 bg-black/80 rounded-2xl shadow-[0_0_30px_#ff0000] border border-red-900 relative overflow-hidden">
      {/* Floating skulls */}
      <div className="absolute top-4 left-6 text-red-600 text-3xl animate-bounce-slow">💀</div>
      <div className="absolute bottom-6 right-8 text-red-600 text-4xl animate-bounce-slow">🩸</div>

      <h2 className="text-3xl spooky-heading glitch mb-4">
        ☠️ Your Bag is Empty ☠️
      </h2>
      <p className="text-gray-300 spooky-desc mb-6 animate-pulse">
        The void is waiting... <br /> Dare to add something inside? 🔮
      </p>

      <Link
        to="/"
        className="bg-red-800 !no-underline hover:bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg transition duration-300 spooky-heading"
      >
        🔥 Summon Items
      </Link>
    </div>
  );
};

export default ErrorMessageForAddToCart;
