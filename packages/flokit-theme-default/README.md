# flokit-theme-default

Default theme for Flokit.

## Install

```sh
yarn add flokit-theme-default
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Flex } from 'flokit'
import theme from 'flokit-theme-default'

const App = () => (
  <ThemeProvider theme={theme}>
    <Flex justifyContent='center' alignItems='center'>
      My App
    </Flex>
  </ThemeProvider>
)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://iagodahlem.mit-license.org/) © Iago Dahlem
