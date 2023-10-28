import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  suggestions_container: { flex: 1 },
  suggestions_title: {
    color: "#fff",
    alignItems: "center",
  },
  suggestions_text: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  suggestions_item: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#1f1e2e",
    backgroundColor: "#fff",
  },
  suggestions_img: {
    width: screenWidth / 4,
    height: screenWidth / 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  suggestions_item_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    paddingLeft: 10,
    fontSize: 20,
    color: "#2a2b40",
  },
});
