import { MdDelete } from "react-icons/md";
import ErrorMessageForAddToCart from "./ErrorMessageForAddToCart";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemFormBag } from "./store/MainStore";

const BagLeft = () => {
  const ItemsForAddToCart = useSelector((store) => store.ADD_TO_CART);
  const dispatch = useDispatch();

  const handleDeleteBtn = (item) => {
    dispatch(deleteItemFormBag(item.item_name));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-950 to-red-950 text-white relative overflow-hidden p-6">
      {/* Misty background */}
      <div className="absolute inset-0 bg-[url('/images/mist.png')] bg-cover opacity-10 animate-pulse" />

      <h2 className="text-center text-4xl font-bold text-white glitch tracking-widest mb-10 relative z-10">
        🛒 Your Cursed Cart 🛒
      </h2>

      {ItemsForAddToCart.length === 0 ? (
        <div className="relative z-10">
          <ErrorMessageForAddToCart />
        </div>
      ) : (
        <div className="space-y-6 relative z-10">
          {ItemsForAddToCart.map((item) => (
            <div
              key={item.id}
              className="border border-red-900 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 
                         bg-black/70 shadow-[0_0_25px_#ff0000] hover:shadow-[0_0_45px_#ff0000] 
                         transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={`../../public/${item.image}`}
                  alt="Cursed Item"
                  className="h-40 w-40 object-contain rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Details */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-red-500 mb-2 spooky-text">
                  {item.item_name}
                </h4>
                <p className="text-sm text-gray-400 mb-2 italic spooky-desc">
                  by {item.company}
                </p>

                {/* Price */}
                <div className="flex flex-wrap gap-3 items-center mb-2">
                  <span className="text-sm text-gray-500 line-through">
                    ₹{item.original_price}
                  </span>
                  <span className="text-lg font-bold text-green-400">
                    ₹{item.current_price}
                  </span>
                  <span className="text-sm text-red-500">
                    ({item.discount_percentage}% off)
                  </span>
                </div>

                {/* Size + Quantity */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-2">
                  <span>
                    <strong>Size:</strong> {item.size}
                  </span>
                  <span>
                    <strong>No. of Items:</strong> {item.quantity}
                  </span>
                </div>

                {/* Ratings */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-500 font-medium">
                    ⭐ {item.rating.stars}/5
                  </span>
                  <span className="text-gray-400">
                    ({item.rating.count} ratings)
                  </span>
                </div>

                {/* Delete Button */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleDeleteBtn(item)}
                    className="bg-red-800 text-white px-5 py-2 rounded-lg 
                               hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] 
                               hover:shadow-[0_0_25px_#ff0000] spooky-btn flex items-center gap-2"
                  >
                    <MdDelete className="text-xl" />
                    <span>Exorcise</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BagLeft;
