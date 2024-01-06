import { configureStore } from "@reduxjs/toolkit";
import WishListReducer from "./wishList/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlistItem: WishListReducer,
  },
});

export default store;