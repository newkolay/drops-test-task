import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './src/api/queryClient'
import { Root } from './src/Root'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
        >
          <Root />
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  )
}

export default App
