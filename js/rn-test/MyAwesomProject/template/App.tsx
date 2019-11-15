import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title='increment' onPress={() => setCount(count + 1)}/>
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

export default App;
