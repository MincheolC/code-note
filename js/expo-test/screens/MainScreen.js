import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          title="FlatList"
          onPress={() => this.props.navigation.push('FlatList')}
        />
        <Button
          title="BasicFlatList"
          onPress={() => this.props.navigation.push('BasicFlatList')}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: '#3665FF',
  }
});
