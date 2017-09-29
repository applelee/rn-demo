import React, { Component } from 'react'
import { StackNavigator } from "react-navigation"

import Guide from '../views/Guide'
import Login from '../user/Login'
import Register from '../user/Register'
import Main from '../pages/Main'
import Default from '../pages/Default'

// 用户操作流程导航
const UserStackNavigator = StackNavigator({
  guide: {
    screen: Guide,
    navigationOptions: {
      header: null,
    },
  },
  login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  register: {
    screen: Register,
    navigationOptions: {
      title: '用户注册',
    },
  },
  main: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
  default: {
    screen: Default,
    navigationOptions: {
      title: '详情',
    },
  },
},{
  initialRouteName: 'guide',
})

export default UserStackNavigator
