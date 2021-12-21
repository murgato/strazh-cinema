import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  head__unFocused: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 60,
  },
  head__Focused: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 60,
  },
  icon: {
    marginVertical: -3,
    marginRight: 90,
  },
  title: {
    position: "absolute",
    width: 294,
    height: 24,
    left: 48,
    top: 50,
  },
  containerInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E3E1DF",
    padding: 5,
    borderRadius: 12,
    width: 350,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    marginRight: 25,
    width: 270,
    color: "#E3E1DF",
  },
  iconInput: {
    marginLeft: 20,
    marginRight: 12,
    marginVertical: 20,
    color: "#E3E1DF",
  },
  iconInput_focus: {
    marginLeft: 20,
    marginRight: 12,
    marginVertical: 20,
    backgroundColor: "#E6BA20",
    color: "#140D24",
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  containerText: {
    flexDirection: "row",
    width: 300,
  },
  textTitleMovie: {
    fontSize: 20,
    marginRight: 130,
    color: "#E6BA20",
  },
  all: {
    fontSize: 20,
    color: "#E6BA20",
  },
  scrollView: {
    maxHeight: 300,
    height: 300,
    width: 400,
    flexDirection: "row",
    marginTop: 14,
  },
  containerMovie: {
    marginBottom: 24,
  },
});
