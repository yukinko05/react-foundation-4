import { configureStore } from "@reduxjs/toolkit";
import breedListReducer from "../features/breedList/breedSlice";
import selectedBreedReducer from "../features/breedList/selectedBreedSlice";
import dogImageReducer from "../features/dogViews/dogImageSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    breedList: breedListReducer,
    selectedBreed: selectedBreedReducer,
    dogImage: dogImageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>();
