import React from 'react'
import { useGame } from './hooks/useGame'
import { GameScreen } from './screens/GameScreen/GameScreen'
import { StartScreen } from './screens/StartScreen/StartScreen'

const Root = () => {
  const { isGameStarted, startGame, step, proceedToNextQuestion, score } =
    useGame()

  if (isGameStarted) {
    return (
      <GameScreen
        step={step}
        score={score}
        proceedToNextQuestion={proceedToNextQuestion}
        restartGame={startGame}
      />
    )
  }

  return <StartScreen startGame={startGame} />
}

export { Root }
