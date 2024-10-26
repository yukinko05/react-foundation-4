import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedBreed {
  selectedBreed: string;
}

const initialState: SelectedBreed = {
  selectedBreed: "affenpinscher",
};

const selectedBreedSlice = createSlice({
  name: "selectedBreed",
  initialState,
  reducers: {
    setSelectedBreed(state, action: PayloadAction<string>) {
      state.selectedBreed = action.payload;
    },
  },
});

export const { setSelectedBreed } = selectedBreedSlice.actions;
export default selectedBreedSlice.reducer;
