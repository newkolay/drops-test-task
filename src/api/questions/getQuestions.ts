import { API_ROUTES } from '../constants'
import { QuestionModel, QuestionsApiResponse } from '../typings'

const getQuestions = async (amount = 5): Promise<QuestionModel[]> => {
  const response = await fetch(
    `${API_ROUTES.questions}?amount=${amount}&encode=url3986`
  )
  const json: QuestionsApiResponse = await response.json()

  return json.results
}

export { getQuestions }
