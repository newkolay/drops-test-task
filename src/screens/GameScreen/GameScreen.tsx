import React, { FC } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useQuestions } from '../../api/questions/useQuestions'
import { Button } from '../../components/Button/Button'
import { GameEnd } from '../../components/GameEnd/GameEnd'
import { Question } from '../../components/Question/Question'

interface GameScreenProps {
  step: number
  proceedToNextQuestion: (isAnswerCorrect: boolean) => void
  score: number
  restartGame: () => void
  returnToStartScreen: () => void
  difficulty: string | null
}

const GameScreen: FC<GameScreenProps> = ({
  step,
  proceedToNextQuestion,
  score,
  restartGame,
  returnToStartScreen,
  difficulty,
}) => {
  const questions = useQuestions(difficulty)

  if (questions.isLoading || questions.isIdle || questions.isFetching) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (questions.isError) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>An error occured</Text>
        <Button onPress={returnToStartScreen}>Return to the main screen</Button>
      </View>
    )
  }

  return (
    <View style={styles.gameScreen}>
      {step < questions.data.length ? (
        <Question
          question={questions.data[step]}
          proceedToNextQuestion={proceedToNextQuestion}
        />
      ) : (
        <GameEnd
          score={score}
          numberOfQuestions={questions.data.length}
          restartGame={restartGame}
          returnToStartScreen={returnToStartScreen}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 28,
    marginBottom: 12,
  },
})

export { GameScreen }
