import React from "react";
import { Image, Pressable, Text, View } from "react-native";
interface PropsMiniMovie {
  movie: Movie;
  onPress?: any;
}
interface Movie {
  title: String;
  img: string;
  imdb: String | number;
}
//Components que e usado para fazer os cartaz dos filme na home
export const MiniMovie = ({ movie, onPress }: PropsMiniMovie) => {
  return (
    <Pressable style={{ height: 220, width: 200 }} onPress={onPress}>
      <Image
        style={{ width: 150, height: 200, borderRadius: 20 }}
        source={{
          uri: movie.img,
        }}
      />
      <Text style={{ marginTop: 12, color: "#E3E1DF" }}> {movie.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginTop: 12, color: "#E6BA20" }}>IMDB</Text>
        <Text style={{ marginTop: 12, color: "#E3E1DF" }}> {movie.imdb}</Text>
      </View>
    </Pressable>
  );
};
