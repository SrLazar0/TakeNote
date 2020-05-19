import { StyleSheet, Dimensions } from "react-native";
import { DefaultBackgroundColor } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    width: Dimensions.get("window").width - 72,
    justifyContent: "center",
    alignItems: "center",
  },

  selectBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  listContainer: {
    top: 30,
    height: 100,
    width: 200,
    position: "absolute",
    backgroundColor: [DefaultBackgroundColor],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  item: {
    padding: 8,
  },
});

export default styles;
