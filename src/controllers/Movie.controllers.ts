import { appSettings } from "../api/appSettings";
import { api } from "../api/api";

//Arquivos que fazem comunicação com a api
export const getFrequentRequests = async () => {
  return await api.get(
    `movie/popular?api_key=${appSettings["api-key"]}&language=en-US`
  );
};
export const getDetails = async (id: number) => {
  return await api.get(
    `movie/${id}?api_key=${appSettings["api-key"]}&language=en-US`
  );
};

export const getMovies = async () => {
  return await api.get(
    `discover/movie?api_key=${appSettings["api-key"]}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  );
};
