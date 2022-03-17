import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../Button/Button'

interface GameEndProps {
  score: number
  numberOfQuestions: number
  restartGame: () => void
  returnToStartScreen: () => void
}

const GameEnd: FC<GameEndProps> = ({
  score,
  numberOfQuestions,
  restartGame,
  returnToStartScreen,
}) => {
  return (
    <View>
      <Text style={styles.gameEndText}>Your final score is</Text>
      <Text style={styles.scoreText}>{`${score} / ${numberOfQuestions}`}</Text>
      <Button onPress={restartGame} style={styles.newGameBtn}>
        Start a new game
      </Button>
      <Button onPress={returnToStartScreen}>Back to the main screen</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  gameEndText: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 24,
    textAlign: 'center',
  },
  scoreText: {
    marginBottom: 12,
    fontWeight: '500',
    fontSize: 28,
    textAlign: 'center',
  },
  newGameBtn: {
    marginBottom: 12,
  },
})

export { GameEnd }
