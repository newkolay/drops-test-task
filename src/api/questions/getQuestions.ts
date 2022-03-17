import { API_ROUTES } from '../constants'
import { QuestionModel, QuestionsApiResponse } from '../typings'

const getQuestions = async (amount = 10): Promise<QuestionModel[]> => {
  const response = await fetch(`${API_ROUTES.questions}?amount=${amount}`)
  const json: QuestionsApiResponse = await response.json()

  return json.results
}

export { getQuestions }
