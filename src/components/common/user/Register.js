import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  registerContainer: {
    flex:1,
  },
  registerBox: {
    marginTop: 100,
    padding: 30,
  },
  input: {
    padding: 10,
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
export default class Register extends Component {
  render() {
    return(
      <View style={styles.registerContainer}>
        <View style={styles.registerBox}>
          <TextInput
            placeholder={'用户名'}
            style={styles.input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'密码'}
            style={styles.input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'确认密码'}
            style={styles.input}
          />

          <View style={styles.buttonBox}>
            <View style={styles.buttonItem}>
              <Button
                title={'注册'}
                onPress={()=>{}}
              />
            </View>
            <View>
              <Button
                title={'注册'}
                onPress={()=>{}}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
