import BagRight from "./bagRight";
import BagLeft from "./bagLeft.jsx";
const Bag = ()=>{

  return (
    <>
    <div className="grid grid-cols-4 gap-3 bg-gradient-to-b from-black via-gray-950 to-red-950">
    <div className=" col-span-3 gap-2">

    <BagLeft/>
    
    </div>
    <div className=" col-span-1 ">
    <BagRight/>
    
    </div>
    </div>
    </>
  )
}
export default Bag;