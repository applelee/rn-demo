import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import Home from '../pages/Home'
import List from '../pages/List'

// 用户操作流程导航
const UserTabNavigator = TabNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      title: 'HOME',
    },
  },
  list: {
    screen: List,
    navigationOptions: {
      title: 'LIST',
    },
  },
},{
  initialRouteName: 'home',
  tabBarPosition: 'bottom',
})

export default UserTabNavigator
