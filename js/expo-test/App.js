import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreenTest } from './screens'

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreenTest />
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
