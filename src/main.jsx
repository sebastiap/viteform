import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const colors = {
  red: {
    900: 'papayawhip',
    800: 'palevioletred',
    700: 'crinsomred',
  },
}

const theme = extendTheme({ colors })

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
