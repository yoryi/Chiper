import React from 'react'
import { WebView } from 'react-native-webview'

export default function Web({ route }) {
    return  <WebView source={{ uri: route.params.url }}/>
}