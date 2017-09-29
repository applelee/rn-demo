import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
})

export default class Home extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text>I am the MyComponent component</Text>
      </View>
    )
  }
}
