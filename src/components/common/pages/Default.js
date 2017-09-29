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
        <Text>详情详情</Text>
      </View>
    )
  }
}
