import { useSelector, useDispatch } from "react-redux";
import { AddItemsInCart } from "./store/MainStore";
import ErrorMessage from "./ErrorMessage";
import AddDetails from "./AddDetails";


const Women = () => {
  const Items = useSelector((store) => store.item);
  const RequiredItems = Items.filter((item) => item.category === "COMPANIONSHIP");
  const dispatch = useDispatch();

  const AddToCartIDs = useSelector((store) => store.ADD_TO_CART);

  const handleAddToCart = (item) => {
    dispatch(AddItemsInCart(item));
  };

  return (
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
              {/* Image */}
              <img
                src={item.image}
                alt="Companionship Product"
                className="w-full h-56 object-contain rounded-lg mb-4 grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Info */}
              <div className="flex flex-col justify-center">
                <span className="text-yellow-500 font-medium mb-1">
                  ⭐ {item.rating.stars}/5
                </span>
                <h4 className="text-lg font-bold !text-red-500 mb-1 spooky-text">
                  {item.item_name}
                </h4>
                <h6 className="text-lg font-bold text-white mb-1 spooky-text">
                  {item.description}
                </h6>
                <p className="text-sm text-gray-400 mb-2 italic spooky-desc">
                  {item.company}
                </p>

                {/* Price */}
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
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => handleAddToCart(item)}
                className="mt-4 px-4 py-2 rounded-lg bg-red-800 text-white hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_25px_#ff0000] spooky-btn"
              >
                {AddToCartIDs.some((ids) => ids.id === item.id)
                  ? "💀 Added"
                  : "🐾 Add To Cart"}
              </button>
              <button
                        type="button"
                     
                        className="mt-4 px-4 py-2 rounded-lg bg-red-800 text-white hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_25px_#ff0000] spooky-btn"
                      >
                        <AddDetails Pass={item.id}/>
                      </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Women;
