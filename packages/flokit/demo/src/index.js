import React from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex } from '../../src'
import './index.css'

const Demo = () => (
  <Box width={1} height='100%'>
    <Flex height='100%' justifyContent='center' alignItems='center' bg='#fafafa'>
      <h1>Flokit Playground</h1>
    </Flex>

    <Flex m='0 auto' p='1.8rem' maxWidth='780px'>
      <Flex bg='red' alignItems='center' justifyContent='center' width={0.33}>
        1
      </Flex>

      <Flex bg='blue' alignItems='center' justifyContent='center' width={0.33}>
        2
      </Flex>

      <Flex bg='green' alignItems='center' justifyContent='center' width={0.33}>
        3
      </Flex>
    </Flex>
  </Box>
)

ReactDOM.render(<Demo />, document.querySelector('#demo'))
