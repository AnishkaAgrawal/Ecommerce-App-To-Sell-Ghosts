import { useSelector, useDispatch } from "react-redux";
import { AddItemsInCart } from "./store/MainStore";
import ErrorMessage from "./ErrorMessage";
import AddDetails from "./AddDetails";
import HauntedH4 from "./HauntedH4";
import ChatbaseBot from "./ChatBot2";
import { Link } from "react-router-dom";

const Companionship = () => {
  const SoundTrack = () => {
    const ghostSound = new Audio("/sound/ghost.mp3");
    ghostSound.play().catch(err => console.log(err));
  
    setTimeout(() => {
      ghostSound.pause();
      ghostSound.currentTime = 0;
  },2000);
  };
  const Items = useSelector((store) => store.item);
  const RequiredItems = Items.filter((item) => item.category === "COMPANIONSHIP");
  const dispatch = useDispatch();

  const AddToCartIDs = useSelector((store) => store.ADD_TO_CART);

  const handleAddToCart = (item) => {
    dispatch(AddItemsInCart(item));
  };

  return (
    <>
    <ChatbaseBot/>
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-950 to-red-950 text-white relative overflow-hidden">
      {/* Mist background */}
      <div className="absolute inset-0 bg-[url('/images/mist.png')] bg-cover opacity-10 animate-pulse" />

      {/* Title */}
      <h1 className="w-full text-center text-5xl font-extrabold text-white tracking-widest py-8 glitch relative z-10">
        🐾 Companionship Collection 🐾
      </h1>

      {/* Items Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-6 z-10 relative">
        {RequiredItems.length === 0 ? (
          <ErrorMessage />
        ) : (
          RequiredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between border border-red-900 rounded-2xl p-6 w-80 bg-black/70 shadow-[0_0_25px_#ff0000] hover:shadow-[0_0_45px_#ff0000] transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={`../../public/${item.image}`}
                alt="Ghost Product"
                className="w-full h-56 object-contain rounded-lg mb-4 grayscale hover:grayscale-0 transition-all duration-500"
              />

              <HauntedH4 text = {item.item_name}/>

              <h6 className="text-md text-red-300 italic mb-2 spooky-desc">
                {item.description}
              </h6>
              <p className="text-sm text-gray-400 mb-2">{item.company}</p>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-gray-500 line-through text-sm">
                  ₹{item.original_price}
                </span>
                <span className="text-green-400 font-semibold">
                  ₹{item.current_price}
                </span>
                <span className="text-red-500 text-sm">
                  ({item.discount_percentage}% off)
                </span>
              </div>
            <div className="flex-grow"></div>
              <button
                type="button"
                onClick={() => handleAddToCart(item)}
                className="mt-4 px-4 py-2 rounded-lg bg-red-800 text-white hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_25px_#ff0000] spooky-btn"
              >
                {AddToCartIDs.some((ids) => ids.id === item.id)
                  ? "💀 Added"
                  : "☠️ Summon Ghost"}
              </button>

              <Link
                to={`/app/details/${item.id}`}
                onClick={SoundTrack}
                className="mt-4 inline-block px-6 py-3 rounded-lg bg-red-800 text-white 
                hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] 
                hover:shadow-[0_0_25px_#ff0000] spooky-btn !no-underline align-center"
              >
                View Details
              </Link>
             </div>

          ))
        )}
      </div>
    </div>
    </>
  );
};

export default Companionship;
