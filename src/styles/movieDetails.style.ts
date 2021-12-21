import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282442",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerButton: {
    padding: 55,
    marginTop: Platform.OS === "ios" ? 35 : 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#E3E1DF",
  },
  buttomWatchForFree: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#655096",
    width: 188,
    height: 40,
    borderRadius: 12,
    marginTop: 45,
  },

  textWatchForFree: {
    fontSize: 16,
    marginRight: 20,
    color: "#E3E1DF",
  },

  containerInfo: {
    padding: 55,
  },
  imdbContainer: {
    flexDirection: "row",
    fontSize: 14,
  },
  imdb: {
    color: "#E6BA20",
  },
  numberImdb: {
    color: "#E3E1DF",
  },
  titleInfo: {
    fontSize: 18,
    color: "#E6BA20",
  },
  textInfo: {
    fontSize: 16,
    textAlign: "justify",
    color: "#E3E1DF",
  },
});
