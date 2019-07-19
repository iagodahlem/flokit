import React from 'react'
import { Box } from 'flokit'

const Container = props => (
  <Box
    width={1}
    m='0 auto'
    px={4}
    css={{
      maxWidth: '1024px',
    }}
    {...props}
  />
)

export default Container
