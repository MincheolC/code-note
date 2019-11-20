import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native App</Text>
      <Text>{count}</Text>
      <Button title='increment' onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
