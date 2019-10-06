import React, { Component } from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import workoutPrograms from '../constants/WorkoutPrograms';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.flatListItem, {backgroundColor: this.props.index % 2 == 0 ? 'white' : 'skyblue'}]}>
        <Image
          source={{ url: this.props.item.imgUrl }}
          style={{ width: 100, height: 100, margin: 5, resizeMode: 'contain' }}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.flatListItemText}>{this.props.item.name}</Text>
        </View>
      </View>
    )
  }
}

export default class BasicFlatList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={workoutPrograms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            // console.log(`Item: ${item} Index: ${index}`);
            return (
              <FlatListItem item={item} index={index}></FlatListItem>
            )
          }}
        />
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  flatListItem: {
    flex: 1,
    flexDirection: 'row'
  },
  flatListItemText: {
    padding: 10,
    fontSize: 22,
  }
});
