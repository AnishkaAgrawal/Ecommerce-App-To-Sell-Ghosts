import {createSlice} from "@reduxjs/toolkit" ; 

const FetchingSlice = createSlice({
  name :"FetchingStatus",
  initialState:{
    // FetchingDone:false,
    currentlyFetching:false,

  },
  reducers:{
    MarkFetchingStarted:(state)=>{
        state.currentlyFetching =true ;
    },
    MarkFetchingEnded :(state)=>{
       state.currentlyFetching = false;
    },

  }

})

export default FetchingSlice;
