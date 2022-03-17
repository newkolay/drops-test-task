import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuestions } from '../../api/questions/useQuestions'
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
    return <Text>Loading questions...</Text>
  }

  if (questions.isError) {
    return <Text>An error occured</Text>
  }

  return (
    <View style={styles.gameScreenStyle}>
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
  gameScreenStyle: {
    flex: 1,
  },
})

export { GameScreen }
