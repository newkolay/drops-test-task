import { API_ROUTES } from '../constants'
import { QuestionModel, QuestionsApiResponse } from '../typings'

const getQuestions = async (
  difficulty: string | null,
  amount = 5
): Promise<QuestionModel[]> => {
  const selectedDifficulty = difficulty || 'easy'

  const response = await fetch(
    `${API_ROUTES.questions}?amount=${amount}&encode=url3986&difficulty=${selectedDifficulty}`
  )
  const json: QuestionsApiResponse = await response.json()

  return json.results
}

export { getQuestions }
