import {createSlice} from "@reduxjs/toolkit";


const ItemSlice = createSlice({
  name:"item",
  initialState:[] ,
  reducers:{
    addInitialPost : (store , action)=>{
      return action.payload ; 
    },
    addNewPost : ()=>{},
    deletePost: ()=>{},
  }
})
export default ItemSlice;
