import React from "react";
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../app/store';
import { useEffect } from 'react';
import { fetchBreedList, selectAllBreeds, selectBreedStatus } from '../breedList/breedSlice';
import { setSelectedBreed } from './selectedBreedSlice';

const BreedSelect = () => {
  const breeds = useSelector(selectAllBreeds);
  const status = useSelector(selectBreedStatus);
  const selectedBreed = useSelector((state: RootState) => state.selectedBreed.selectedBreed);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBreedList());
  }, [dispatch]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const breed = event.target.value;
    dispatch(setSelectedBreed(breed));
  };

  return (
    <div className='text-center mt-20'>
      {status === "pending" && <div>リスト取得中...</div>}
      {status === "failed" && <div>データが取得できませんでした</div>}
      {status === "succeeded" && (
        <label className="text-2xl text-slate-600">
          Breeds List
          <select
            className="ml-4 border rounded-md px-2 py-1"
            name="breeds"
            value={selectedBreed || ""}
            onChange={handleSelectChange}
          >
            {Object.keys(breeds).map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
};

export default BreedSelect;