import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";


import { Colors } from "react-native/Libraries/NewAppScreen";
import Back_Ground from "../assets/background1.jpg";
import Main_Logo from "../assets/logo2.png";

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/background1.jpg")}
      style={styles.bgImage}
    >
      <Image style={styles.Logo} source={require("../assets/Main_Logo.png")} />
      <ScrollView style={styles.back}></ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },

  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },

  Logo: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
