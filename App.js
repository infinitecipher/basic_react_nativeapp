import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputtext, setOutputText] = useState("Open up App.js to start working on your app!")

  return (
    <View style={styles.container}>
      <Text>{outputtext}</Text>
      <StatusBar style="auto" />
      <Button title="change text" onPress={() => setOutputText("Change text hi")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
