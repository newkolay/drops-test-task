import React from 'react'
import { useGame } from './hooks/useGame'
import { GameScreen } from './screens/GameScreen/GameScreen'
import { StartScreen } from './screens/StartScreen/StartScreen'

const Root = () => {
  const {
    isGameStarted,
    startGame,
    step,
    proceedToNextQuestion,
    score,
    returnToStartScreen,
    difficulty,
    setDifficulty,
  } = useGame()

  if (isGameStarted) {
    return (
      <GameScreen
        step={step}
        score={score}
        proceedToNextQuestion={proceedToNextQuestion}
        restartGame={startGame}
        returnToStartScreen={returnToStartScreen}
        difficulty={difficulty}
      />
    )
  }

  return (
    <StartScreen
      startGame={startGame}
      difficulty={difficulty}
      setDifficulty={setDifficulty}
    />
  )
}

export { Root }
