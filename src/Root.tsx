import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useGame } from './hooks/useGame'
import { GameScreen } from './screens/GameScreen/GameScreen'
import { StartScreen } from './screens/StartScreen/StartScreen'

const Root = () => {
  const { isGameStarted, startGame } = useGame()

  if (isGameStarted) {
    return <GameScreen />
  }

  return <StartScreen startGame={startGame} />
}

export { Root }
