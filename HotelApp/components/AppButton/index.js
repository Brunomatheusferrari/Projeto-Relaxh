import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#354F52",
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#FAF7F2",
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 25,
      color: "#FAF7F2",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });