import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../../components/Button/Button'

interface StartScreenProps {
  startGame: () => void
}

const StartScreen: FC<StartScreenProps> = ({ startGame }) => {
  return (
    <View style={styles.startScreenStyle}>
      <Button onPress={startGame}>Start the game</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  startScreenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export { StartScreen }
