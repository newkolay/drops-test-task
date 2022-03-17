import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker'

import { Button } from '../../components/Button/Button'

interface StartScreenProps {
  startGame: () => void
  difficulty: string | null
  setDifficulty: React.Dispatch<React.SetStateAction<string | null>>
}

const StartScreen: FC<StartScreenProps> = ({
  startGame,
  difficulty,
  setDifficulty,
}) => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ])

  return (
    <View style={styles.startScreenStyle}>
      <DropDownPicker
        open={open}
        listMode="SCROLLVIEW"
        value={difficulty}
        items={items}
        setOpen={setOpen}
        setValue={setDifficulty as Dispatch<SetStateAction<ValueType | null>>}
        setItems={setItems}
        placeholder="Select Difficulty"
        style={styles.pickerStyle}
      />
      <Button onPress={startGame}>Start the game</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  pickerStyle: {
    marginBottom: 24,
  },
  startScreenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export { StartScreen }
