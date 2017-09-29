/*
登录之后
*/

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation"

import UserTabNavigator from '../navs/UserTabNavigator'

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
  },
})

export default class Main extends Component {
  render() {
    const { navigate } = this.props.navigation

    return(
      <View style={styles.mainContainer}>
        <UserTabNavigator screenProps={{navigate}} />
      </View>
    )
  }
}
