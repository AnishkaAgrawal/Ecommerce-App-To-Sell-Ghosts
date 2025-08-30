export default function ScaryButton({ text = "Shop Now" }) {
  return (
    <button
      className="
        relative z-10 overflow-hidden
        px-6 py-2 rounded-full text-3xl font-extrabold 
        border-4 border-white  text-white
        transition-colors duration-500
        hover:text-red-100
        before:content-[''] before:absolute before:top-0 before:left-0
        before:w-full before:h-full before:bg-red-950
        before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-700
        hover:before:scale-x-100 hover:before:origin-top-left
        before:-z-10
      "
    >
      {text}
    </button>
  );
}
