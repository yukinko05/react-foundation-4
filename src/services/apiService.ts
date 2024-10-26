import axiosInstance from "../api/axiosInstance";

export const fetchBreedList = async () => {
  const response = await axiosInstance.get("/breeds/list/all");
  return response.data;
};

export const fetchDogImages = async (selectedBreed: string | null) => {
  const response = await axiosInstance.get(
    `/breed/${selectedBreed}/images/random/12`
  );
  return response.data.message;
};
