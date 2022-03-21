import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todo = ({route}) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params.user)}</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({})