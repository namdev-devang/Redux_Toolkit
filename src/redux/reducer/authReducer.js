import { createSlice } from "@reduxjs/toolkit";
import {message,message as MESSAGE} from "antd"
import {
  decreasCount,
  increasCount,
  getData,
  AddData,
} from "../action/auth.action";

const initialState = {
  loading: false,
  count: 0,
  product: [],
  cartData: [],
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(increasCount.fulfilled, (state) => {
      return { ...state, count: state.count + 1 };
    });
    builder.addCase(decreasCount.fulfilled, (state) => {
      if (state.count != 0) {
        return { ...state, count: state.count - 1 };
      } else {
        alert("lklk");
      }
    });

    builder.addCase(getData.fulfilled, (state, action) => {
      return { ...state, product: action.payload };
    });

    builder.addCase(AddData.fulfilled, (state, action) => {
      const { id} = action.payload;
      const existingItem = state.cartData.find((item) => item.id === id);
      if (existingItem) {
        MESSAGE.error("Item already in the cart.!")
      } else {
        state.cartData.push(action.payload);
      }
    });
  },
});

export default authReducer.reducer;
