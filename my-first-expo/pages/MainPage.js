import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";


export default function App() {


  return (
    <ImageBackground
      source={require("../assets/background1.jpg")}
      style={styles.bgImage}
    >

    <View style = {styles.Logo_contain}>
      <Image style={styles.Logo} source={require("../assets/logo2.png")}/> 
    </View>

    <View style = {styles.Main_Menu_Contain}>
      <TouchableOpacity style = {styles.Menu_Button1}><Text style = {styles.Button_Text}>시설안내</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.Menu_Button2}><Text style = {styles.Button_Text}>커뮤니티</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.Menu_Button3}><Text style = {styles.Button_Text}>예약안내</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.Menu_Button4}><Text style = {styles.Button_Text}>위치안내</Text></TouchableOpacity>
    </View>

    <View style = {styles.Main_Big_con}>
      <Text style = {styles.Big_Main_Text} >G·BLACK</Text>
    </View>

    <View style = {styles.Main_Desc_con}>
      <Text style = {styles.Big_Main_Text_Des}>
      세상에 없던 새로운 골프 연습의 시작!{"\n"}
      쾌적하게 즐길수있는 프리미엄 골프 스튜디오</Text>
    </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },

  Logo_contain: {
    flex : 0.05,
    marginTop : 20,
    flexDirection : "row",
    justifyContent : "center",
  },

  Main_Menu_Contain : {
    flexDirection : "row",
    justifyContent : "center",
    marginTop : -9,
  },

  Main_Big_con : {
    flex : 0.1,
    marginTop : 20,
    flexDirection : "row",
    justifyContent : "center",
  },

  Main_Desc_con: {
    flex : 0.08,
    marginTop : 10,
    flexDirection : "row",
    justifyContent : "center",
  },

  Big_Main_Text : {
    fontSize : 50,
    color : "white",
  },

  Big_Main_Text_Des : {
    fontSize : 18,
    textAlign : "center",
    color : "white"
    },

  Button_Text:{
    fontWeight : "bold",
    color : "white"
  },

  Menu_Button1 : {
    height : 30,
    borderRadius : 2,
    margin : 10,
  },

  Menu_Button2 : {
    fontWeight : "bold",
    margin : 10,
  },

  Menu_Button3 : {
    margin : 10,
    marginLeft : 110,
  },

  Menu_Button4 : {
    fontWeight : "bold",
    margin : 10,
  },

});
