import React from "react";
import { View, Button, StyleSheet } from "react-native";

const CustomButton = ({ style, type, ...rest }) => {
  return (
    <View
      style={{...styles.button, ...style}}
    >
      <Button {...rest} color={styles[type].color} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  primary: {
    color: "#f7287b"
  },
  secondary: {
    color: "#c717fc"
  }
});

export default CustomButton;
