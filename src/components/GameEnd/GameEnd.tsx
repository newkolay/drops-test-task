import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../Button/Button'

interface GameEndProps {
  score: number
  numberOfQuestions: number
  restartGame: () => void
}

const GameEnd: FC<GameEndProps> = ({
  score,
  numberOfQuestions,
  restartGame,
}) => {
  return (
    <View>
      <Text style={styles.gameEndText}>Your final score is</Text>
      <Text style={styles.scoreText}>{`${score} / ${numberOfQuestions}`}</Text>
      <Button onPress={restartGame}>Start a new game</Button>
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
})

export { GameEnd }
