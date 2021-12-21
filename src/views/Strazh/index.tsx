import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/global.styles";
import { styles } from "../../styles/home.styles";
import { MiniMovie } from "../../components/MiniMovie/Index";
import {
  IMiniMovie,
  IMovieDetails,
  IMovieState,
} from "../../store/movie/types";
import {
  getDetails,
  getFrequentRequests,
} from "../../controllers/Movie.controllers";

import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import {
  setFrequentRequest,
  setMovie,
  setRescentRequest,
} from "../../store/movie/actions";
import { appSettings } from "../../api/appSettings";

export function Strazh({ navigation }: any) {
  const [searchMovie, setSearchMovie] = useState("");
  const [FocusSearch, setFocusSearch] = useState(false);
  const [MovieFind, setMovieFind] = useState<{ title: string; id: number }[]>(
    []
  );
  const dispatch = useDispatch();
  const searchRef: any = useRef();

  const recentRequests = useSelector<
    IMovieState,
    IMovieState["recentRequests"]
  >((state) => state.recentRequests);

  const moviesFrequentRequest = useSelector<
    IMovieState,
    IMovieState["frequentRequests"]
  >((state) => state.frequentRequests);

  useEffect(() => {
    frequentRequests();
  }, []);

  //Função com o auxilio da controllers faz a população dos frequentRequests e RescentRequest
  const frequentRequests = async () => {
    let response: any = await getFrequentRequests();

    let movies = response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.original_title,
      imdb: movie.vote_average,
      img: appSettings["path-image"] + movie.poster_path,
    }));
    dispatch(setRescentRequest(movies));
    dispatch(setFrequentRequest(movies));
  };

  //Função que faz um getOnly no filme que foi selecionado
  const getDetailsMovie = async (id: number) => {
    let response: any = await getDetails(id);
    let data: any = response.data;
    let genres: string = "";
    if (response.status === 200) {
      if (data.genres) {
        data.genres.forEach((genr: any) => {
          genres += `,${genr.name}`;
        });
      }
      let movie: IMovieDetails = {
        title: data.original_title,
        overview: data.overview,
        img: appSettings["path-image"] + data.poster_path,
        gener: genres,
        imdb: data.vote_average,
        otherInfo: "",
      };
      dispatch(setMovie(movie));
      navigation.push("MovieDetails");
    }
  };
  //Faz a pesquisa dos filmes
  const searchMovieOnly = (text: string) => {
    let aux = JSON.parse(JSON.stringify(moviesFrequentRequest));
    setMovieFind([]);
    let movie: any = [];
    aux.forEach((aux: any) => {
      if (aux.title.toUpperCase().includes(text.toUpperCase())) {
        movie.push({ title: aux.title, id: aux.id });
      }
    });
    setMovieFind(movie);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <View
          style={FocusSearch ? styles.head__Focused : styles.head__unFocused}
        >
          <AntDesign
            style={styles.icon}
            name="arrowleft"
            size={36}
            color="#E3E1DF"
            onPress={() => navigation.push("Login")}
          />
          <Text style={globalStyles.subtitle}>Strazh Cinema</Text>
        </View>
      {/* Input que faz a pesquisa de filmes */}
        <KeyboardAvoidingView enabled>
          <View style={styles.containerInput}>
            <AntDesign
              style={styles.iconInput}
              name="search1"
              size={20}
              onPress={() => {}}
            />
            <TextInput
              ref={searchRef}
              returnKeyType="search"
              style={styles.input}
              placeholder="What do you want to watch?"
              placeholderTextColor={"#E3E1DF"}
              onFocus={() => {
                setFocusSearch(true);
              }}
              onChangeText={(text) => {
                setSearchMovie(text);
                searchMovieOnly(text);
              }}
              blurOnSubmit={false}
              value={searchMovie}
            />
          </View>
        </KeyboardAvoidingView>

        {
          //Renderização do itens da pesquisa
          FocusSearch && MovieFind.length !== 0 ? (
            <ScrollView
              style={{
                backgroundColor: "#140D24",
                width: 350,
                alignContent: "center",
              }}
            >
              {MovieFind.map((movie, index) => {
                return (
                  <Text
                    style={{ color: "#E3E1DF", fontSize: 20, margin: 30 }}
                    onPress={() => {
                      getDetailsMovie(movie.id);
                    }}
                    key={index}
                  >
                    {movie.title}
                  </Text>
                );
              })}
            </ScrollView>
          ) : null
        }

        {/* Criação da lista de filmes na home */}
        <View style={styles.containerMovie}>
          <View style={styles.containerText}>
            <Text style={styles.textTitleMovie}> Recent Requests</Text>
            <Text style={styles.all}>All</Text>
          </View>
          <ScrollView horizontal style={styles.scrollView}>
            {recentRequests
              ? recentRequests.map((request: IMiniMovie, index: number) => (
                  <Pressable
                    key={index}
                    onPress={() => getDetailsMovie(request.id)}
                  >
                    <MiniMovie key={index} movie={request} />
                  </Pressable>
                ))
              : null}
          </ScrollView>
        </View>
        <View style={styles.containerMovie}>
          <View style={styles.containerText}>
            <Text style={styles.textTitleMovie}>Frequent requests</Text>
            <Text style={styles.all}> All</Text>
          </View>
          <ScrollView horizontal style={styles.scrollView}>
            {moviesFrequentRequest ||
            typeof moviesFrequentRequest !== "undefined"
              ? moviesFrequentRequest.map(
                  (movieFrequentRequest: IMiniMovie, index: number) => (
                    <View key={index}>
                      <MiniMovie
                        key={index}
                        onPress={() => getDetailsMovie(movieFrequentRequest.id)}
                        movie={movieFrequentRequest}
                      />
                    </View>
                  )
                )
              : null}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
