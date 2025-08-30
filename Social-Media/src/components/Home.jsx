import { useSelector, useDispatch } from "react-redux";
import { AddItemsInCart } from "./store/MainStore";
import { Ghost } from "lucide-react";
import AddDetails from "./AddDetails";
import ScaryButton from "./HauntedBtn";
import HauntedH1 from "./HauntedH1";
import HauntedH4 from "./HauntedH4";
import {useState} from "react" ; 
import { Link } from "react-router-dom";

const Home = () => {
  const [isPlaying , setIsPlaying] = useState(false);
  const [sound] = useState (()=>{
    new Audio("sound/ghost.mp3");
  })
  const SoundTrack = ()=>{
    if(isPlaying){
      sound.pause();
      sound.currentTime = 0;
      setIsPlaying(false);
    }else{
      sound.play();
      setIsPlaying(true);
    }

  }
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(AddItemsInCart(item));
  };

  const Items = useSelector((store) => store.item);
  const AddToCartIDs = useSelector((store) => store.ADD_TO_CART);

  return (
    <>
      {/* Top Section with Dementor Background */}
      <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for Dark Effect */}
        <div className="absolute inset-0 bg-black/30 -z-10"></div>

        <HauntedH1 text="Welcome To Haunted Bazaar 💀" />
        <a href="#shop">
          <ScaryButton text="Shop Now" />
        </a>
      </div>

      {/* Shop Section */}
      <div
        id="shop"
        className="min-h-screen w-full bg-gradient-to-b from-black to-red-950  text-white relative overflow-hidden py-12"
      >
        <div className="mt-12 flex flex-wrap justify-center gap-6 px-6 z-10 relative">
          {Items.map((item) => (
            // start
            <div
              key={item.id}
              className="flex flex-col justify-between border border-red-900 rounded-2xl p-6 w-80 bg-black/70 shadow-[0_0_25px_#ff0000] hover:shadow-[0_0_45px_#ff0000] transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={item.image}
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
                to={`/details/${item.id}`}
                onClick={SoundTrack}
                className="mt-4 inline-block px-6 py-3 rounded-lg bg-red-800 text-white 
                hover:bg-red-600 transition-all shadow-[0_0_10px_#ff0000] 
                hover:shadow-[0_0_25px_#ff0000] spooky-btn !no-underline align-center"
              >
                View Details
              </Link>
             </div>
            // <div
            //   key={item.id}
            //   className="flex flex-col border border-red-800 
            //  rounded-2xl p-6 w-80 bg-black/80 
            //  shadow-md hover:shadow-[0_0_25px_#ff0000] 
            //  transition-all duration-500 hover:-translate-y-2"
            // >
            //    <img
            //     src={item.image}
            //     alt="Ghost Product"
            //     className="w-full h-56 object-contain rounded-lg mb-4 grayscale hover:grayscale-0 transition-all duration-500"
            //   />

            //   <HauntedH4 text={item.item_name} />

            //   <h6 className="text-sm text-gray-300 italic mb-2">
            //     {item.description}
            //   </h6>
            //   <p className="text-xs text-gray-400 mb-2">{item.company}</p>

            //   <div className="flex items-center gap-2 mt-2 mb-4">
            //     <span className="text-gray-500 line-through text-sm">
            //       ₹{item.original_price}
            //     </span>
            //     <span className="text-green-400 font-bold">
            //       ₹{item.current_price}
            //     </span>
            //     <span className="text-red-500 text-xs">
            //       ({item.discount_percentage}% off)
            //     </span>
            //   </div>

            //   {/* Spacer pushes buttons down */}
            //   <div className="flex-grow"></div>

            //   <button
            //     type="button"
            //     onClick={() => handleAddToCart(item)}
            //     className="w-full mt-2 px-4 py-2 rounded-lg bg-red-700 
            //    text-white font-medium 
            //    hover:bg-red-600 
            //    transition-all 
            //    shadow-md hover:shadow-[0_0_20px_#ff0000]"
            //   >
            //     {AddToCartIDs.some((ids) => ids.id === item.id)
            //       ? "💀 Added"
            //       : "☠️ Summon Ghost"}
            //   </button>

            //   <Link
            //     to={`/details/${item.id}`}
            //     className="w-full mt-2 px-4 py-2 rounded-lg bg-red-700 !no-underline 
            //    text-white font-medium text-center 
            //    hover:bg-red-600 
            //    transition-all 
            //    shadow-md hover:shadow-[0_0_20px_#ff0000]"
            //   >
            //     View Ghost Details
            //   </Link>
            // </div>

            // end
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
