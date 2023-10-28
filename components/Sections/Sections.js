import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./Sections.style";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Sections = ({ data }) => {
  return (
    <View style={styles.sections_container}>
      <View style={styles.sections_title}>
        <Text style={styles.sections_text}>{data.suggestions[3].name}</Text>
        <FontAwesome5
          name="times"
          size={20}
          color="#fff"
          style={styles.sections_icon}
        />
      </View>

      <FlatList
        data={data.sections[0].elements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sections_item}>
            <FontAwesome5
              name="check-circle"
              size={20}
              color="#fff"
              style={styles.sections_item_icon}
            />
            <Text style={styles.sections_item_text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Sections;
