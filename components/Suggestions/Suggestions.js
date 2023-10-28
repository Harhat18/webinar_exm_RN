import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./Suggestions.style";
const Suggestions = ({ data }) => {
  return (
    <View style={styles.suggestions_container}>
      <View style={styles.suggestions_title}>
        <Text style={styles.suggestions_text}>Sizin için öneriler</Text>
      </View>
      <View>
        <FlatList
          data={data.suggestions}
          keyExtractor={(item) => item.id.toString()}
          onClick={() => {
            handleWebinarSelect(item);
          }}
          renderItem={({ item }) => (
            <View style={styles.suggestions_item}>
              <Image
                source={require("../../assets/education.jpeg")}
                style={styles.suggestions_img}
                resizeMode="cover"
                accessibilityLabel={item.name}
              />
              <Text style={styles.suggestions_item_text}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Suggestions;
