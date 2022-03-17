import 'react-native'
import React from 'react'
import { Question } from '../src/components/Question/Question'

import { fireEvent, render } from '@testing-library/react-native'

const testQuestion = {
  category: 'Entertainment: Board Games',
  type: 'boolean',
  difficulty: 'easy',
  question: 'Snakes and Ladders was originally created in India?',
  correct_answer: 'True',
  incorrect_answers: ['False'],
}

it('renders Next Question button after answer selection', () => {
  const { getAllByA11yRole, getByText } = render(
    <Question question={testQuestion} proceedToNextQuestion={jest.fn()} />
  )
  const firstAnswer = getAllByA11yRole('button')[0]
  fireEvent.press(firstAnswer)
  expect(getByText('Next Question')).toBeDefined()
})

it('disabled answers after selecting one', () => {
  const { getAllByA11yRole } = render(
    <Question question={testQuestion} proceedToNextQuestion={jest.fn()} />
  )
  const firstAnswer = getAllByA11yRole('button')[0]
  fireEvent.press(firstAnswer)
  expect(firstAnswer.props.accessibilityState.disabled).toEqual(true)
})

it('shows wrong answer message if that one selected', () => {
  const { getByText, getByTestId } = render(
    <Question question={testQuestion} proceedToNextQuestion={jest.fn()} />
  )
  const wrongAnswer = getByText('False')
  fireEvent.press(wrongAnswer)
  expect(getByTestId('text-result').props.children).toContain('Wrong answer')
})

it('shows success answer message if that one selected', () => {
  const { getByText, getByTestId } = render(
    <Question question={testQuestion} proceedToNextQuestion={jest.fn()} />
  )
  const correctAnswer = getByText('True')
  fireEvent.press(correctAnswer)
  expect(getByTestId('text-result').props.children).toContain('Correct answer')
})
