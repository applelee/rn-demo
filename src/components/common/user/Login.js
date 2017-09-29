import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from "react-navigation"

const styles = StyleSheet.create({
  loginContainer: {
    flex:1,
  },
  loginBox: {
    marginTop: 100,
    padding: 20,
  },
  input: {
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonItem: {
    marginRight: 20,
  },
})

// 登录组件
export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation

    return(
      <View style={styles.loginContainer}>
        <View style={styles.loginBox}>
          <TextInput
            placeholder={'登录'}
            style={styles.input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'密码'}
            style={styles.input}
          />

          <View style={styles.buttonBox}>
            <View style={styles.buttonItem}>
              <Button
                title={'登录'}
                onPress={() => navigate('main')}
              />
            </View>
            <View>
              <Button
                title={'注册'}
                onPress={() => navigate('register')}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
