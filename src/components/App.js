/*
入口文件
*/

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation"

import UserStackNavigator from './common/navs/UserStackNavigator'

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    borderTopWidth: 25,
    borderTopColor: '#3369E8',
  },
})

export default class App extends Component {
  render() {
    return(
      <View style={styles.appContainer}>
        <UserStackNavigator />
      </View>
    )
  }
}
