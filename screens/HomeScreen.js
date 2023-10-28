import React, { useEffect, useState } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./HomeScreen.style";
import datawebiner from "../utils/data.json";
import Video from "../components/Video/Video";
import Sections from "../components/Sections/Sections";
import Suggestions from "../components/Suggestions/Suggestions";

const HomeScreen = () => {
  const [data, setData] = useState(null);

  const [selectedWebinar, setSelectedWebinar] = useState([]);
  useEffect(() => {
    setData(datawebiner);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1f1e2e" style="light" />
      {/* Video */}
      {selectedWebinar && <Video />}
      {/* sections */}
      {data && <Sections data={data} />}
      {/* suggestions */}
      {data && <Suggestions data={data} />}
    </SafeAreaView>
  );
};

export default HomeScreen;
