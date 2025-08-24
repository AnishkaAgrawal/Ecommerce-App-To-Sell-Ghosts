import { createSlice } from "@reduxjs/toolkit";

const add_to_cartSlice = createSlice({
  name:"ADD_TO_CART",
  initialState:[],
  reducers:{
    AddItemsInCart:(store,action)=>{
      let find =store.some(item=>item.item_name == action.payload.item_name );
      if(!find){
        return [...store , action.payload];
      }else{
        return store;
      }
      
      
      
    },
    deleteItemFormBag :(store,action)=>{
    
      return store.filter(item => item.item_name !=action.payload);
    }
  }
});

 export default add_to_cartSlice;