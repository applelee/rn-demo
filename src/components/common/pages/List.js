import React, { Component } from 'react'
import { View, Text, FlatList, Animated, TouchableHighlight, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  itemBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    paddingLeft: 20,
  }
})

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const ListItem = ({ item }) => {
  return(
    <TouchableHighlight
      onPress={()=>item.navigate('default')}
      style={styles.itemBox}
      activeOpacity={0.8}
      underlayColor={'#eee'}>
      <Text>{item.key}</Text>
    </TouchableHighlight>
  )
}

export default class List extends Component {
  _keyExtractor = (item, index) => item.key + index

  render() {
    const { navigate } = this.props.screenProps

    return (
      <AnimatedFlatList
        refreshing={true}
        onRefresh={()=>{}}
        keyExtractor={this._keyExtractor}
        style={styles.listContainer}
        data={[{key: 'a',navigate},{key: 'b',navigate},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'h'},{key: 'i'},{key: 'j'},{key: 'k'},{key: 'l'},{key: 'm'},{key: 'n'},{key: 'o'},{key: 'p'},{key: 'q'},{key: 'r'},{key: 's'},{key: 't'},{key: 'a'},{key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'h'},{key: 'i'},{key: 'j'},{key: 'k'},{key: 'l'},{key: 'm'},{key: 'n'},{key: 'o'},{key: 'p'},{key: 'q'},{key: 'r'},{key: 's'},{key: 't'}]}
        // ListHeaderComponent={() => <Text>哈哈哈</Text>}
        renderItem={ListItem}
      />
    )
  }
}
