import { StyleSheet, Platform } from "react-native";

const ios = Platform.OS === "ios";

export default StyleSheet.create({
  sections_container: { flex: 1, marginBottom: 10 },
  sections_title: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    justifyContent: "space-between",
  },
  sections_text: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
  sections_icon: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sections_item: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sections_item_icon: { marginRight: 10 },
  sections_item_text: {
    fontSize: ios ? 13 : 16,
    color: "#fff",
    flex: 1,
  },
});
