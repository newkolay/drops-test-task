import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuestions } from '../../api/questions/useQuestions'

const GameScreen = () => {
  const questions = useQuestions()

  if (questions.isLoading || questions.isIdle) {
    return <Text>Loading questions...</Text>
  }

  if (questions.isError) {
    return <Text>An error occured</Text>
  }

  return (
    <View style={styles.gameScreenStyle}>
      <Text>{questions.data.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreenStyle: {
    flex: 1,
  },
})

export { GameScreen }
