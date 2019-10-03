// https://www.youtube.com/watch?v=4yCch6x85Q8

import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Data from '../constants/Data';
import ListItem from '../components/ListItem';

export default class FlatListTest extends Component {
  constructor(props) {
    super(props);
    this.initData = Data;
    this.state = {
      data: this.initData,
    };
  }

  handleDeleteTask = (itemId) => {
    const newData = this.state.data.filter(item => itemId != item.id);
    this.setState({ data: newData });
  }

  render() {
    const header = () => {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>List Header</Text>
        </View>
      )
    }
    return (
      <View style={styles.contentContainer}>
        <FlatList
          ListHeaderComponent={header}
          data={this.state.data}
          keyExtractor={(item) => (item.id).toString()}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator}></View>}
          contentContainerStyle={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}
          renderItem={({ item, index }) => <ListItem item={item} index={index} handleDeleteTask={this.handleDeleteTask}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemSeperator: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5
  },
  header: {
    height: 60,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {

  }
});
