import { MantineProvider, createTheme } from '@mantine/core'
import './App.css'
import Page from './home'
import "@mantine/core/styles.css"
import React from 'react'

const theme = createTheme({
  /** Your theme override here */
  fontSizes: {
    md: '16px'
  },
  fontFamily: '\'Prompt\', \'Arial\', sans-serif'
})

function App() {

  return (
    <MantineProvider theme={theme}>
      <Page />
    </MantineProvider>

  )
}

export default App
