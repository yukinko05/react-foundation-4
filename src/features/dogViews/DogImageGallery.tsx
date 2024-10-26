import React from "react";
import { useSelector } from 'react-redux';
import { fetchDogImages } from "./dogImageSlice";
import { selectDogImages } from './selectors';
import { useAppDispatch, RootState } from '../../app/store';
import { useEffect } from 'react';

const DogImageGallery = () => {
  const { dogImage, status, error } = useSelector(selectDogImages);
  const dispatch = useAppDispatch();
  const selectedBreed = useSelector((state: RootState) => state.selectedBreed.selectedBreed);

  useEffect(() => {
    if (selectedBreed) {
      dispatch(fetchDogImages(selectedBreed));
    }
  }, [dispatch, selectedBreed]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      {status === "pending" && (
        <div className="text-xl text-center text-gray-700">リスト取得中...</div>
      )}
      {status === "failed" && (
        <div className="text-xl text-center text-red-600">データが取得できませんでした: {error}</div>
      )}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dogImage.map((img, index) => (
            <img
              className="dogImg object-cover w-full h-48 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105"
              key={index}
              src={img}
              alt="Dog"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DogImageGallery;