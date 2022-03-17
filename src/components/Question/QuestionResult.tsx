import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../Button/Button'

interface QuestionResultProps {
  userAnswer: string
  correctAnswer: string
}

const QuestionResult: FC<QuestionResultProps> = ({
  userAnswer,
  correctAnswer,
}) => {
  const isAnswerCorrect = userAnswer === correctAnswer

  return (
    <View>
      <Text style={styles.questionResultText}>
        {isAnswerCorrect
          ? 'Correct answer! ☺️'
          : `Wrong answer 😔 \n Correct one: ${decodeURIComponent(
              correctAnswer
            )}`}
      </Text>
      <Button onPress={() => {}}>Next Question</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  questionResultText: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 20,
    textAlign: 'center',
  },
})

export { QuestionResult }
