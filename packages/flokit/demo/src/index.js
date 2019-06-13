import React from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex } from '../../src'
import './index.css'

const Demo = () => (
  <Box width={1} height={1}>
    <Flex
      height='100%'
      justifyContent='center'
      alignItems='center'
      style={{ backgroundColor: '#fafafa' }}
    >
      <h1>Flokit Playground</h1>
    </Flex>

    <Box
      m='0 auto'
      p='1.8rem'
      style={{ maxWidth: '780px', padding: '1.8rem' }}
    >

    </Box>
  </Box>
)

ReactDOM.render(<Demo />, document.querySelector('#demo'))
