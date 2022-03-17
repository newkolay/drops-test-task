import { useState } from 'react'

interface UseGameReturn {
  isGameStarted: boolean
  startGame: () => void
}

const useGame = (): UseGameReturn => {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const startGame = () => {
    setIsGameStarted(true)
  }

  return { isGameStarted, startGame }
}

export { useGame }
