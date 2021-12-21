import { styles } from "../../styles/movieDetails.style";
import {
  ContainerMovieInfo,
  ContainerOverLay,
  ContainerwithImageBackgroud,
} from "./components";

import React from "react";
import { Pressable, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { IMovieState } from "../../store/movie/types";

//Screen responsavel pela informações do filme
export const MovieDetails = ({ navigation }: any) => {
  const movie = useSelector<IMovieState, IMovieState["movie"]>(
    (state) => state.movie
  );

  return (
    <View style={styles.container}>
      <ContainerwithImageBackgroud
        source={{
          uri: movie.img,
        }}
        resizeMode="cover"
        style={{
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        <ContainerOverLay>
          <View style={styles.containerButton}>
            <AntDesign
              name="arrowleft"
              size={36}
              color="#E3E1DF"
              onPress={() => navigation.push("Home")}
            />
            <AntDesign
              name="close"
              size={36}
              color="#E3E1DF"
              onPress={() => navigation.push("Home")}
            />
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.imdbContainer}>
              <Text style={styles.imdb}>IMDB </Text>
              <Text style={styles.numberImdb}>{movie.imdb}</Text>
            </View>
            <Text style={styles.numberImdb}>{movie.gener}</Text>
            <View
              style={{
                flexDirection: "row",
                maxHeight: 300,
                width: 200,
              }}
            >
              <View>
                <Pressable style={styles.buttomWatchForFree}>
                  <Text style={styles.textWatchForFree}>Watch for free</Text>
                  <Feather name="play" size={25} color="#E6BA20" />
                </Pressable>
              </View>
              <View
                style={{ flexDirection: "row", marginTop: 55, marginLeft: 50 }}
              >
                <Feather
                  name="star"
                  size={20}
                  color="#E3E1DF"
                  style={{ marginRight: 25 }}
                />
                <Feather name="share-2" size={20} color="#E3E1DF" />
              </View>
            </View>
          </View>
        </ContainerOverLay>
      </ContainerwithImageBackgroud>
      <ContainerMovieInfo>
        <Text style={styles.titleInfo}>Movie info</Text>
        <Text style={styles.textInfo}>{movie.overview}</Text>
      </ContainerMovieInfo>
    </View>
  );
};
