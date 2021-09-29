import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../../theme/colors";

export const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: colors.lightGreen,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 5
    },
    appButtonText: {
      fontSize: 25,
      color: "#FAF7F2",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });