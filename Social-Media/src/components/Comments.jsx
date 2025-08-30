import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HauntedH1 from "./HauntedH1";
import HauntedH4 from "./HauntedH4";

export default function Comments() {
  const { id } = useParams();
  const items = useSelector((store) => store.item);
  const neededItem = items.filter((i) => i.id.toString() === id);

  if (!id || neededItem.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 italic">
        👻 No haunted items found...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen font-mono flex items-center justify-center">
      {/* 🔮 Background */}
      <div className="absolute inset-0">
        <img
          src={`/${neededItem[0].image}`}
          alt="Haunted Background"
          // className="w-full h-full object-cover opacity-84 bg-gradient-to-b from-black to-red-950/40 "
          className="w-full h-full object-cover opacity-84 bg-gradient-to-b from-black to-red-950/40"

        />
        {/* Spooky translucent overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950/40 backdrop-blur-[0.5px]"></div> */}
      </div>

      {/* 🧟 Foreground */}
      {/* <div className="relative z-10 w-full max-w-5xl p-6"> */}
        {neededItem.map((item) => (
          <div
            key={item.id}
            className="bg-black/70 rounded-2xl shadow-2xl border border-red-900/50 p-8 backdrop-blur-sm text-center"
          >
            {/* Title */}
            <HauntedH1>🔪 {item.item_name}</HauntedH1>

            {/* Company */}
            <HauntedH4>
              🏢 Made by: <span className="text-red-300">{item.company}</span>
            </HauntedH4>

            {/* Description */}
            <p className="text-gray-300 mb-6 italic max-w-2xl mx-auto">
              💤 {item.description}
            </p>

            {/* Extra Photos */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {item.add_photo.map((photo, idx) => (
                <img
                  key={idx}
                  src={`../../public/${photo}`}
                  alt="Ghost Product"
                  className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-red-700/50 shadow-md hover:scale-105 hover:shadow-red-500/40 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Pricing */}
            <div className="mb-6">
              <p className="text-green-400 text-2xl drop-shadow-lg">
                💸 ₹{item.current_price}
                <span className="line-through text-gray-500 ml-2">
                  ₹{item.original_price}
                </span>
              </p>
              <p className="text-base text-red-300">
                🔥 {item.discount_percentage}% OFF — one-night only!
              </p>
              <p className="text-yellow-400 text-sm mt-2">
                🚚 Delivery: {item.delivery_date}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-yellow-400 text-lg">
                ⭐ {item.rating.stars}
              </span>
              <span className="text-gray-400 text-sm">
                ({item.rating.count} victims reviewed)
              </span>
            </div>

            {/* Comments */}
            <div className="space-y-3 mb-6">
              <HauntedH4>💀 Victim Reviews:</HauntedH4>
              {item.comments.map((comm, idx) => (
                <div
                  key={idx}
                  className="bg-red-950/50 p-4 rounded-lg border border-red-700/40 shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <p className="text-gray-200">☠️ {comm}</p>
                </div>
              ))}
            </div>

            {/* Extra Info */}
            <div className="mt-6 text-sm text-gray-400 italic space-y-1">
              <p>⚠️ Return Policy: {item.return_period} days (basically… never 😅)</p>
              <p>🛑 Side Effect: May appear in your dreams 🌙</p>
              <p>
                🎓 Student Note: Works as an{" "}
                <span className="text-yellow-400">anti-all-nighter tool</span>
              </p>
            </div>
          </div>
        ))}
      {/* </div> */}
    </div>
  );
}
