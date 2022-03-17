import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { QuestionModel } from '../../api/typings'
import { useQuestion } from '../../hooks/useQuestion'
import { QuestionResult } from './QuestionResult'
import { Button } from '../Button/Button'

interface QuestionProps {
  question: QuestionModel
  proceedToNextQuestion: (isAnswerCorrect: boolean) => void
}

const Question: FC<QuestionProps> = ({ question, proceedToNextQuestion }) => {
  const { userAnswer, validateAnswer, allAnswers } = useQuestion(question)

  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.title}>{decodeURIComponent(question.question)}</Text>

      {allAnswers.map((answer) => (
        <Button
          key={answer}
          onPress={() => validateAnswer(answer)}
          style={styles.answerButton}
          isDisabled={!!userAnswer}
        >
          {decodeURIComponent(answer)}
        </Button>
      ))}

      {userAnswer && (
        <QuestionResult
          userAnswer={userAnswer}
          correctAnswer={question.correct_answer}
          proceedToNextQuestion={proceedToNextQuestion}
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
    paddingHorizontal: 12,
    marginTop: 24,
    marginBottom: 24,
    fontSize: 24,
    textAlign: 'center',
  },
  answerButton: {
    marginBottom: 12,
  },
})

export { Question }
