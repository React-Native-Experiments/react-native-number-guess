import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGame handleStartGame={handleStartGame} />;
  if (userNumber) {
    screen = <Game userNumber={userNumber} />;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
