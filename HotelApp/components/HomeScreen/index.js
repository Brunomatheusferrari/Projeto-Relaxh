import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from 'react-native';
import { AppButton } from "../AppButton";
import imgLogo from "../../static/img/logoRelaxh.png"
import planta1 from "../../static/img/leaves1.png"
import planta2 from "../../static/img/leaves3.png"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <Image source={planta2} style={styles.planta2}/>
        <View style={styles.bigContainer}>
          <View style={styles.container_header}>
            <Image style={styles.logo} source={imgLogo}/>
            <Text style={styles.title}>Home</Text>
          </View>
          <View style={styles.button_container}>
            <AppButton title="Check-in" onPress={() => navigation.navigate('Check-in')}/>
            <AppButton title="Check-Out" onPress={() => navigation.navigate('Check-Out')}/>
          </View>
        </View>
        <Image style={styles.planta1} source={planta1}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: "#2F3E46"
    },
    planta1:{
        zIndex: -1,
        position: "absolute",
        top: screenHeight - (screenWidth / 2),
        left: screenWidth - (screenWidth + 10),
    },
    planta2:{
      zIndex: -1,
      position: "absolute",
      top: screenHeight - (screenWidth * 2.2),
      left: screenWidth - 350,
      transform: [
        {scale: 0.5}
      ]
    },
    bigContainer: {
      margin: 50
    },
    title: {
      color: "#FAF7F2",
      fontSize: 50
    },
    logo: {
      width: 100,
      height: 150
    },
    container_header:{
      flex: 1, 
      alignItems: 'center',
      justifyContent: "space-around"
    },
    button_container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'space-evenly'
    }
  });