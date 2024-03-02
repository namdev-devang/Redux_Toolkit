import { createAsyncThunk } from "@reduxjs/toolkit";

export const increasCount = createAsyncThunk("increasCount", () => {
  return {};
});

export const decreasCount = createAsyncThunk("decreasCount", () => {
  return {};
});

export const getData = createAsyncThunk('getData', async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    return data;
  });
export const AddData = createAsyncThunk('AddData', async (item) =>{
  return item
}) 