import { useQuery, UseQueryResult } from 'react-query'
import { EQueryKey } from '../constants'
import { QuestionModel } from '../typings'
import { getQuestions } from './getQuestions'

const useQuestions = (
  difficulty: string | null
): UseQueryResult<QuestionModel[]> => {
  return useQuery(EQueryKey.Questions, () => getQuestions(difficulty))
}

export { useQuestions }
