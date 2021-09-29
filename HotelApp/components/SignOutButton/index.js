import React from "react";
import {StyleSheet, TouchableOpacity, Dimensions ,Text } from "react-native";
import colors from "../../theme/colors";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const SignOutButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    appButtonContainer: {
      alignSelf: "flex-start",
      backgroundColor: colors.mediumGreen,
      paddingVertical: 5,
      position: "absolute",
      left: screenWidth - (screenWidth * 1.2),
      paddingHorizontal: 6,
      paddingVertical: 6,
      borderRadius: 5
    },
    appButtonText: {
      fontSize: 15,
      color: "#FAF7F2",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });