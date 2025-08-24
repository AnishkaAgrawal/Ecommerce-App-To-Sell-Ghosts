import { useSelector } from "react-redux";

export default function Comments({ Pass }) {
  const items = useSelector((store) => store.item);
  const neededItem = items.filter((i) => i.id === Pass);

  if (!Pass || neededItem.length === 0) {
    return (
      <div className="text-center text-gray-400 italic mt-10">
        👻 No haunted items found...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {neededItem.map((item) => (
        <div key={item.id}>
          <h2 className="text-3xl font-bold text-red-400 drop-shadow-md mb-4">
            🔪 {item.item_name}
          </h2>

          <p className="text-gray-400 text-sm mb-2">
            🏢 Made by: <span className="text-red-300">{item.company}</span>
          </p>
          <p className="text-gray-300 mb-6 italic">💤 {item.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {item.add_photo.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt="Ghost Product"
                className="w-40 h-40 object-cover rounded-lg border border-red-500/30 shadow-md hover:scale-105 hover:shadow-red-400/40 transition-transform"
              />
            ))}
          </div>

          <div className="mb-6">
            <p className="text-green-400 text-xl">
              💸 ₹{item.current_price}{" "}
              <span className="line-through text-gray-500 ml-2">
                ₹{item.original_price}
              </span>
            </p>
            <p className="text-sm text-red-300">
              🔥 {item.discount_percentage}% OFF — one-night only!
            </p>
            <p className="text-yellow-400 text-sm mt-2">
              🚚 Delivery: {item.delivery_date}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-400 text-lg">⭐ {item.rating.stars}</span>
            <span className="text-gray-400 text-sm">({item.rating.count} victims reviewed)</span>
          </div>

          <div className="space-y-3 mb-6">
            <h3 className="text-xl font-semibold text-red-300 mb-2">💀 Victim Reviews:</h3>
            {item.comments.map((comm, idx) => (
              <div
                key={idx}
                className="bg-red-900/40 p-3 rounded-lg border border-red-600/40 shadow-md"
              >
                <p className="text-gray-200">☠️ {comm}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-400 italic">
            ⚠️ Return Policy: {item.return_period} days (basically… never 😅)
            <br />
            🛑 Side Effect: May appear in your dreams 🌙
            <br />
            🎓 Student Note: Works as an{" "}
            <span className="text-yellow-400">anti-all-nighter tool</span>
          </div>
        </div>
      ))}
    </div>
  );
}
