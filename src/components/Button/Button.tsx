import React, { FC } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native'

interface ButtonProps {
  onPress: () => void
  style?: StyleProp<TextStyle>
}

const Button: FC<ButtonProps> = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.btnBody, style]} onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnBody: {
    backgroundColor: '#24a0ed',
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
})

export { Button }
