import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as dogService from "../../services/apiService";

export const fetchDogImages = createAsyncThunk(
  "dogImages",
  async (selectedBreed: string | null) => {
    const dogImages = await dogService.fetchDogImages(selectedBreed);
    return dogImages;
  }
);

export type DogImages = {
  dogImage: string[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
};

const initialState: DogImages = {
  dogImage: [],
  status: "idle",
  error: undefined,
};

export const dogImageSlice = createSlice({
  name: "dogImages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDogImages.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchDogImages.fulfilled, (state, action) => {
      state.dogImage = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchDogImages.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export const selectDogImages = (state: RootState) => ({
  dogImage: state.dogImage.dogImage,
  status: state.dogImage.status,
  error: state.dogImage.error,
});

export default dogImageSlice.reducer;
