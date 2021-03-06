import { useState } from 'react'
import { ValueType } from 'react-native-dropdown-picker'
import { EQueryKey } from '../api/constants'
import { queryClient } from '../api/queryClient'

interface UseGameReturn {
  isGameStarted: boolean
  startGame: () => void
  step: number
  proceedToNextQuestion: (isAnswerCorrect: boolean) => void
  score: number
  returnToStartScreen: () => void
  difficulty: string | null
  setDifficulty: React.Dispatch<React.SetStateAction<string | null>>
}

const useGame = (): UseGameReturn => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [difficulty, setDifficulty] = useState<string | null>(null)

  const startGame = () => {
    queryClient.invalidateQueries(EQueryKey.Questions)
    setIsGameStarted(true)
    setStep(0)
    setScore(0)
  }

  const returnToStartScreen = () => {
    setIsGameStarted(false)
  }

  const proceedToNextQuestion = (isAnswerCorrect: boolean) => {
    setStep((prev) => prev + 1)
    setScore((prev) => (isAnswerCorrect ? prev + 1 : prev))
  }

  return {
    isGameStarted,
    startGame,
    step,
    proceedToNextQuestion,
    score,
    returnToStartScreen,
    difficulty,
    setDifficulty,
  }
}

export { useGame }
