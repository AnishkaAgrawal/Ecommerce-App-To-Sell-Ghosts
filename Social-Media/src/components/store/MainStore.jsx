import {configureStore} from "@reduxjs/toolkit";
import FetchingSlice from "./FetchingState";
import ItemSlice from "./itemStore";
import add_to_cartSlice from "./Add-to-cart";

const finalStore = configureStore({reducer:{
  item:ItemSlice.reducer,
  ADD_TO_CART:add_to_cartSlice.reducer,
  FetchingStatus:FetchingSlice.reducer,
}})

export const ItemAction = ItemSlice.actions;
export const FetchingActions = FetchingSlice.actions;

export const {deleteItemFormBag,AddItemsInCart,addbtnTag} = add_to_cartSlice.actions;

export default finalStore ; 