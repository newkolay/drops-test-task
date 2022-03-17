import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { QuestionModel } from '../../api/typings'
import { useQuestion } from '../../hooks/useQuestion'
import { QuestionResult } from './QuestionResult'
import { Button } from '../Button/Button'

interface QuestionProps {
  question: QuestionModel
}

const Question: FC<QuestionProps> = ({
  question: { question, correct_answer, incorrect_answers },
}) => {
  const { userAnswer, validateAnswer, generateAnswers } = useQuestion()
  const allAnswers = generateAnswers(correct_answer, incorrect_answers)

  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.title}>{decodeURIComponent(question)}</Text>

      {allAnswers.map((answer) => (
        <Button
          key={answer}
          onPress={() => validateAnswer(answer)}
          style={styles.answerButton}
        >
          {decodeURIComponent(answer)}
        </Button>
      ))}

      {userAnswer && (
        <QuestionResult
          userAnswer={userAnswer}
          correctAnswer={correct_answer}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  questionWrapper: {
    flex: 1,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  answerButton: {
    marginBottom: 12,
  },
})

export { Question }
