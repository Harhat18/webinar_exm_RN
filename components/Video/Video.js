import React from "react";
import { View } from "react-native";
import { Vimeo } from "react-native-vimeo-iframe";
import styles from "./video.style";
const Video = () => {
  return (
    <View style={styles.video_container}>
      <Vimeo
        videoId={"874107330"}
        params={"api=1&autoplay=0"}
        style={styles.video}
      />
    </View>
  );
};

export default Video;
