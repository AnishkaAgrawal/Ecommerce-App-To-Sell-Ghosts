import { useSelector, useDispatch } from "react-redux";
import { AddItemsInCart } from "./store/MainStore";
import { Ghost } from "lucide-react"; // spooky icon (optional)
import AddDetails from "./AddDetails";

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(AddItemsInCart(item));
  };

  const Items = useSelector((store) => store.item);
  const AddToCartIDs = useSelector((store) => store.ADD_TO_CART);

  return (
    <>
    
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-950 to-red-950  text-white relative overflow-hidden">
  {/* Floating mist effect */}
 

  <div className="absolute inset-0 bg-[url('/images/mist.png')] bg-cover opacity-10 animate-pulse" />
  
  <h1 className="w-full text-center text-5xl font-extrabold text-white tracking-widest py-8 glitch">
    👻 Welcome to Haunted Bazaar 👻
  </h1>

  {/* Centered card grid */}
  <div className="flex flex-wrap justify-center gap-6 px-6 z-10 relative">
    {Items.map((item) => (
      <div
        key={item.id}
        className="flex flex-col justify-between border border-red-900 rounded-2xl p-6 w-80 bg-black/70 shadow-[0_0_25px_#ff0000] hover:shadow-[0_0_45px_#ff0000] transition-all duration-500 hover:-translate-y-2"
      >
        <img
          src={item.image}
          alt="Ghost Product"
          className="w-full h-56 object-contain rounded-lg mb-4 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <h4 className="text-lg font-bold text-red-500 mb-2 spooky-text">
          {item.item_name}
        </h4>
        <h6 className="text-md !text-red-300 italic mb-2 spooky-desc">
          {item.description}
        </h6>
        <p className="text-sm text-gray-400 mb-2">{item.company}</p>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-gray-500 line-through text-sm">₹{item.original_price}</span>
          <span className="text-green-400 font-semibold">₹{item.current_price}</span>
          <span className="text-red-500 text-sm">({item.discount_percentage}% off)</span>
        </div>

        <button
          type="button"
          onClick={() => handleAddToCart(item)}
          className="mt-4 px-4 py-2 rounded-lg bg-red-800 text-white hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_25px_#ff0000] spooky-btn"
        >
          {AddToCartIDs.some((ids) => ids.id === item.id) ? "💀 Added" : "☠️ Summon Ghost"}
        </button>
        <button
          type="button"
       
          className="mt-4 px-4 py-2 rounded-lg bg-red-800 text-white hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_25px_#ff0000] spooky-btn"
        >
          <AddDetails Pass={item.id}/>
        </button>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default Home;
