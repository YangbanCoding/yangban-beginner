import React from 'react'
import { SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

function App () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://github.com/YangbanCoding/yangban-beginner/blob/main/docs/beginner.MD'}}
      />
    </SafeAreaView>
  )
}

export default App
