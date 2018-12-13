import React from 'react'
import ReactDOM from 'react-dom'
import theme from 'flokit-theme-default'
import './index.css'

import { ThemeProvider, Base, Flex } from '../../src'

const Demo = () => (
  <ThemeProvider theme={theme}>
    <Base style={{ height: '100%' }}>
      <Flex justifyContent='center' alignItems='center' style={{ height: '100%', backgroundColor: '#fafafa' }}>
        <h1>Flokit Playground</h1>
      </Flex>

      <Base style={{ maxWidth: '780px', margin: '0 auto', padding: '1.8rem' }}>
        {/* Components above here */}
      </Base>
    </Base>
  </ThemeProvider>
)

ReactDOM.render(<Demo />, document.querySelector('#demo'))
