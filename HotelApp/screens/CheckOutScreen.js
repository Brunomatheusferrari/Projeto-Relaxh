import React from "react";
import { Dimensions,StyleSheet ,View, Text } from 'react-native';
import { AppButton } from "../components/AppButton/index";

import Scanner from "../components/Scanner/index";

export function CheckOutScreen({navigation}) {

    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Scanner type="Checkout">
          <AppButton title="Go Back" onPress={() => navigation.goBack()}/>
        </Scanner>
      </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 50,
      color: "#FAF7F2"
    },
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'space-around',
      backgroundColor: "#354F52" 
    },
    container_footer: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: "space-evenly",
      padding: 50
    },
    big_container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'space-around',
      padding: 50
    }
  })

  
  