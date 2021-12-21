import { IMovieState, MovieActions, MovieStore, MovieTypes } from "./types";

//criacao de estado do aplicativo possa usar
const INITIAL_STATE: IMovieState = {
  movie: {
    overview: "",
    gener: "",
    otherInfo: "",
    imdb: "",
    img: "",
    title: "",
  },
  recentRequests: [],
  frequentRequests: [],
};

const MovieReducer = (state = INITIAL_STATE, action: MovieActions) => {
  switch (action.idStore) {
    case MovieStore.ID_STORE:
      switch (action.type) {
        case MovieTypes.SET_MOVIE:
          return { ...state, movie: action.movie };
        case MovieTypes.SET_FREQUENT_REQUEST:
          return { ...state, frequentRequests: action.frequentRequests };
        case MovieTypes.SET_RECENTS_REQUEST:
          return { ...state, recentRequests: action.recentRequests };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default MovieReducer;
