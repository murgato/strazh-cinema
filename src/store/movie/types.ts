//Criacao da tipagem que vai ser usado pelo o redux e tambem algumas inteface usadas em algumas functions
export enum MovieStore {
  ID_STORE = "MOVIE",
}
export enum MovieTypes {
  SET_MOVIE = "SET_MOVIE",
  SET_FREQUENT_REQUEST = "SET_FREQUENT_REQUEST",
  SET_RECENTS_REQUEST = "SET_RECENTS_REQUEST",
}

export type MovieActions = {
  idStore: MovieStore.ID_STORE;
  type: MovieTypes;
  movie?: IMovieState["movie"];
  frequentRequests?: IMovieState["frequentRequests"];
  recentRequests?: IMovieState["recentRequests"];
};

export interface IMovieState {
  movie: IMovieDetails | any;
  recentRequests: IMiniMovie[] | any;
  frequentRequests: IMiniMovie[] | any;
}

export interface IMiniMovie {
  img: string;
  title: string;
  imdb: number | string;
  id: number;
}
export interface IMovieDetails {
  img: string;
  title: string;
  imdb: number | string;
  gener: string;
  overview: string;
  otherInfo: string;
}
