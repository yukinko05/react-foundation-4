import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectDogImagesState = (state: RootState) => ({
  dogImage: state.dogImage.dogImage,
  status: state.dogImage.status,
  error: state.dogImage.error,
});

export const selectDogImages = createSelector(
  [selectDogImagesState],
  (dogImages) => dogImages
);
