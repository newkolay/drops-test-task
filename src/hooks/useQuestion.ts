import { useState } from 'react'
import { shuffleArray } from '../utils/shuffleArray'

interface UseQuestionReturn {
  userAnswer: string | null
  validateAnswer: (chosenAnswer: string) => void
  generateAnswers: (
    correctAnswer: string,
    incorrectAnswers: string[]
  ) => string[]
}

const useQuestion = (): UseQuestionReturn => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null)

  const validateAnswer = (chosenAnswer: string) => {
    setUserAnswer(chosenAnswer)
  }

  const generateAnswers = (
    correctAnswer: string,
    incorrectAnswers: string[]
  ) => {
    return shuffleArray([correctAnswer, ...incorrectAnswers])
  }

  return { userAnswer, validateAnswer, generateAnswers }
}

export { useQuestion }
