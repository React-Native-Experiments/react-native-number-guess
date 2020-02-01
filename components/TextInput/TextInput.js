import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ style, ...rest }) => {
  return <TextInput style={{ ...styles.input, ...style }} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "100%"
  }
});

export default CustomTextInput;
