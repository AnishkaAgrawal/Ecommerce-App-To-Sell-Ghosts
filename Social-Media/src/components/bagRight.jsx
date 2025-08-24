import { useSelector } from "react-redux";

const BagRight = () => {
  const AddToBag = useSelector((store) => store.ADD_TO_CART);

  const totalMrp = AddToBag.reduce(
    (sum, current) => sum + current.original_price,
    0
  );
  const currentPrice = AddToBag.reduce(
    (sum, current) => sum + current.current_price,
    0
  );
  const discount = totalMrp - currentPrice;
  const convenienceFee = totalMrp > 0 ? 99 : 0;
  const finalAmount = totalMrp > 0 ? currentPrice + convenienceFee : 0;

  return (
    // <div className="bg-gradient-to-b from-black via-gray-950 to-red-950">
    <div className="bg-black/70 border border-red-900 rounded-2xl p-6 mt-7 mr-2  text-white">
      <h4 className="text-2xl font-bold text-red-500 text-center mb-6 glitch">
        💀 Price Details 💀
      </h4>

      <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base">
        <div className="space-y-2 text-gray-300">
          <p>Total MRP</p>
          <p>Discount on MRP</p>
          <p>Convenience Fees</p>
          <p className="text-red-400 font-bold">Total Amount</p>
        </div>

        <div className="space-y-2 text-right">
          <p>₹{totalMrp}</p>
          <p className="text-green-400">-₹{discount}</p>
          <p>{convenienceFee > 0 ? `₹${convenienceFee}` : "Free"}</p>
          <p className="text-green-400 font-bold">₹{finalAmount}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        disabled={AddToBag.length === 0}
        onClick={() => {
          if (AddToBag.length > 0) {
            window.location.href = "/ghost-order"; // redirect to funny ghost page
          }
        }}
        className="w-full mt-6 px-6 py-3 rounded-lg bg-red-800 text-white font-semibold 
             hover:bg-red-600 disabled:bg-gray-700 disabled:cursor-not-allowed
             shadow-[0_0_15px_#ff0000] hover:shadow-[0_0_30px_#ff0000] 
             transition-all spooky-btn"
      >
        {AddToBag.length === 0
          ? "☠️ Nothing to Summon"
          : "🩸 Place Cursed Order"}
      </button>
    </div>
    // </div>
  );
};

export default BagRight;
