import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuestions } from '../../api/questions/useQuestions'
import { Question } from '../../components/Question/Question'

const GameScreen = () => {
  const questions = useQuestions()

  if (questions.isLoading || questions.isIdle) {
    return <Text>Loading questions...</Text>
  }

  if (questions.isError) {
    return <Text>An error occured</Text>
  }

  const firstQuestion = questions.data[0]

  return (
    <View style={styles.gameScreenStyle}>
      <Question question={firstQuestion} />
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreenStyle: {
    flex: 1,
  },
})

export { GameScreen }
