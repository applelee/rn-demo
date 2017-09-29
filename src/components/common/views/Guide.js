import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  guide:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})

export default class Guide extends Component {
  render() {
    return(
      <View style={styles.guide}>
        <Button
          onPress={() => this.props.navigation.navigate('login', {title: 'Login'})}
          title="Go to Login" />
      </View>
    )
  }
}
