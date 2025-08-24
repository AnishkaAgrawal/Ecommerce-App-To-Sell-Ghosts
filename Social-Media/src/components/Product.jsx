import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

const Product = ()=>{
return(
  <>
  <div className="grid grid-cols-2 h-full ">
  <div className = "col-span-1  p-4"><ProductLeft/></div>
  <div className = "col-span-1  p-4"><ProductRight/></div>
  </div>
  
  </>
)
}
export default Product ; 