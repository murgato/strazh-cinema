import { IMovieState, MovieActions, MovieStore, MovieTypes } from "./types";

export const setMovie = (movie: IMovieState["movie"]): MovieActions => ({
  idStore: MovieStore.ID_STORE,
  type: MovieTypes.SET_MOVIE,
  movie,
});

export const setFrequentRequest = (
  frequentRequests: IMovieState["frequentRequests"]
): MovieActions => ({
  idStore: MovieStore.ID_STORE,
  type: MovieTypes.SET_FREQUENT_REQUEST,
  frequentRequests,
});

export const setRescentRequest = (
  recentRequests: IMovieState["recentRequests"]
): MovieActions => ({
  idStore: MovieStore.ID_STORE,
  type: MovieTypes.SET_RECENTS_REQUEST,
  recentRequests,
});
