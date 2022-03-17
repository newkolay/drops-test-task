import { useEffect, useState } from 'react'
import { QuestionModel } from '../api/typings'
import { shuffleArray } from '../utils/shuffleArray'

interface UseQuestionReturn {
  userAnswer: string | null
  validateAnswer: (chosenAnswer: string) => void
  allAnswers: string[]
}

const useQuestion = (question: QuestionModel): UseQuestionReturn => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null)
  const [allAnswers, setAllAnswers] = useState<string[]>([])

  useEffect(() => {
    setAllAnswers(
      shuffleArray([question.correct_answer, ...question.incorrect_answers])
    )
    setUserAnswer(null)
  }, [question.question])

  const validateAnswer = (chosenAnswer: string) => {
    setUserAnswer(chosenAnswer)
  }

  return { userAnswer, validateAnswer, allAnswers }
}

export { useQuestion }
