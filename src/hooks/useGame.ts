import { useState } from 'react'
import { EQueryKey } from '../api/constants'
import { queryClient } from '../api/queryClient'

interface UseGameReturn {
  isGameStarted: boolean
  startGame: () => void
  step: number
  proceedToNextQuestion: (isAnswerCorrect: boolean) => void
  score: number
}

const useGame = (): UseGameReturn => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)

  const startGame = () => {
    queryClient.invalidateQueries(EQueryKey.Questions)
    setIsGameStarted(true)
    setStep(0)
    setScore(0)
  }

  const proceedToNextQuestion = (isAnswerCorrect: boolean) => {
    setStep((prev) => prev + 1)
    setScore((prev) => (isAnswerCorrect ? prev + 1 : prev))
  }

  return { isGameStarted, startGame, step, proceedToNextQuestion, score }
}

export { useGame }
