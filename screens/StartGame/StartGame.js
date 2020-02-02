import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert
} from "react-native";
import Card from "../../components/Card";
import CustomButton from "../../components/Button";
import TextInput from "../../components/TextInput";
import NumberContainer from "../../components/NumberContainer";

const StartGame = ({ handleStartGame }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleValueChange = text => {
    const formatText = text.replace(/[^0-9]/g, "");
    setValue(formatText);
  };

  const handleValueReset = () => {
    setValue("");
    setConfirmed(false);
  };

  const handleValueConfirm = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        "Invalid Number",
        "Number has to be between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleValueReset }]
      );
    } else {
      setRandomNumber(parseInt(value));
      setValue("");
      setConfirmed(true);
      Keyboard.dismiss();
    }
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{randomNumber}</NumberContainer>
        <Button
          title="Start Game"
          color="#f7287b"
          onPress={() => handleStartGame(randomNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.container}>
          <Text>Select a number</Text>
          <TextInput
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleValueChange}
            value={value}
          />
          <View style={styles.buttons}>
            <CustomButton
              type="secondary"
              title="Reset"
              onPress={handleValueReset}
            />
            <CustomButton
              type="primary"
              title="Confirm"
              onPress={handleValueConfirm}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  container: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGame;
