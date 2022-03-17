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
  isDisabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, onPress, style, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnBody,
        style,
        isDisabled ? styles.disabledButton : styles.normalButton,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnBody: {
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  normalButton: {
    backgroundColor: '#24A0ED',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
})

export { Button }
