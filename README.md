<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/iagodahlem/flokit/master/logo/logo.png" alt="flokit" height="320" />
</p>

<br>

<p align="center">
  Toolkit for easily and smoothly building UIs with <a href="https://reactjs.org/">React</a>. As smooth as <a href="https://en.wikipedia.org/wiki/Hrafna-Fl%C3%B3ki_Vilger%C3%B0arson">Floki</a> build ships.
</p>

<br>

<p align="center">
  <a href="https://travis-ci.org/iagodahlem/flokit"><img src="https://img.shields.io/travis/iagodahlem/flokit/master.svg?style=flat-square" /></a>
  <a href="https://npmjs.org/package/flokit"><img src="https://img.shields.io/npm/v/flokit.svg?style=flat-square" /></a>
</p>

## Getting Started

### Install

With npm.

```sh
npm install --save flokit
```

Or with yarn.

```sh
yarn add flokit
```

### Usage

Import components directly from `flokit` to build and/or compose your UI or design system.

```js
import { Flex } from 'flokit'

<Flex
  width={1}
  height={1}
  alignItems='center'
  justifyContent='center'
>
  I'm a flexbox
</Flex>
```

## Props

Flokit is built with [styled-system](https://styled-system.com) for theamable and responsive style props. So go check their docs if you are not familiar with it yet.

### Strings

Strings values are parsed to raw CSS values, you can use it to set non numerical property values, or to use custom units for numerical values, as `rem` or `em`. You can also use strings for setting values defined in the theme object, as for color values.

```js
// picks the value defined in `theme.colors['blue']`
<Box color='blue' />

// picks up a nested color value using dot notation
// `theme.colors['gray'][0]`
<Box color='gray.0' />

// raw CSS color value
<Box color='#f00' />

// width `'2em'`
<Box width='2em' />

// sets margin `'auto'`
<Box m='auto' />

// sets margin `'16rem'`
<Box m='16rem' />
```

### Numbers

You can use numbers as props in several ways to define property values.

* For scale props as `const spaces = [0, 4, 8, 16, 32]` for defining `margin` and `padding`, you can use numbers from 0 to the length of the scale. Numbers greater than the length of the scale are transformed into pixel raw values. Negative numbers are transformed into negative pixel raw values.

```js
// sets margin value of `theme.space[1]`
<Box m={1} />

// sets a margin value of `16px` since it's greater than `theme.space.length`
<Box m={16} />
```

* For percentange values as `width` and `height` you can use numbers between 0-1. Numbers greater than 1 are transformed into raw pixel values.

```js
// width `33.3%`
<Box width={1/3} />

// width `50%`
<Box width={1/2} />

// width `100%`
<Box width={1} />

// width `256px`
<Box width={256} />
```

### Arrays

You can use a shorthand array syntax to define responsive width, height, margin, padding, font-size and a lot of [other properties](https://styled-system.com/responsive-styles/).

```js
<Box width={[1, 1/2, 1/4]} />
```

This will map your array of values into mobile-first media queries, giving you the following:

```css
.Box {
  width: 100%;
}

@media screen and (min-width: 40em) {
  .Box {
    width: 50%;
  }
}

@media screen and (min-width: 52em) {
  .Box {
    width: 25%;
  }
}
```

## Components

### Box

Primitive box-model component. Used as the base for all other components.

```js
import { Box } from 'flokit'

<Box>
  I'm a box
</Box>
```

#### Props

| Prop | CSS Property | Type |
| :--- | :--- | :--- |
| `position` | `position` | `string`\|`array` |
| `zIndex` | `z-index` | `string`\|`array` |
| `top` | `top` | `string`\|`array` |
| `right` | `right` | `string`\|`array` |
| `bottom` | `bottom` | `string`\|`array` |
| `left` | `left` | `string`\|`array` |
| `display` | `display` | `string`\|`array` |
| `width` | `width` | `string`\|`number`\|`array` |
| `height` | `height` | `string`\|`number`\|`array` |
| `size` | `width` and `height` | `string`\|`number`\|`array` |
| `m` | `margin` | `string`\|`number`\|`array` |
| `mt` | `margin-top` | `string`\|`number`\|`array` |
| `mr` | `margin-right` | `string`\|`number`\|`array` |
| `mb` | `margin-bottom` | `string`\|`number`\|`array` |
| `ml` | `margin-left` | `string`\|`number`\|`array` |
| `mx` | `margin-left` and `margin-right` |`string`\| `number`\|`array` |
| `my` | `margin-top` and `margin-bottom` |`string`\| `number`\|`array` |
| `p`  | `padding` | `string`\|`number`\|`array` |
| `pt` | `padding-top` | `string`\|`number`\|`array` |
| `pr` | `padding-right` | `string`\|`number`\|`array` |
| `pb` | `padding-bottom` | `string`\|`number`\|`array` |
| `pl` | `padding-left` | `string`\|`number`\|`array` |
| `px` | `padding-left` and `padding-right` |`string`\| `number`\|`array` |
| `py` | `padding-top` and `padding-bottom` |`string`\| `number`\|`array` |
| `fontSize` | `font-size` | `string`\|`number`\|`array` |
| `color` | `color` | `string`\|`array` |
| `bg`\|`backgroundColor` | `background-color` | `string`\|`array` |
| `flex` | `flex` | `string`\|`array` |
| `justifySelf` | `justify-self` | `string`\|`array` |
| `alignSelf` | `align-self` | `string`\|`array` |
| `order` | `order` | `string`\|`array` |

### Flex

Primitive flexbox component. Extends `Box`.

```js
import { Flex } from 'flokit'

<Flex alignItems='center'>
  I'm a flexbox
</Flex>
```

#### Props

| Prop | CSS Property | Type |
| :--- | :--- | :--- |
| `alignItems` | `align-items` | `string`\|`array` |
| `alignContent` | `align-content` | `string`\|`array` |
| `justifyContent` | `justify-content` | `string`\|`array` |
| `flexWrap` | `flex-wrap` | `string`\|`array` |
| `flexBasis` | `flex-basis` | `string`\|`array` |
| `flexDirection` | `flex-direction` | `string`\|`array` |

### Text

Primitive text component. Extends `Box`.

```js
import { Text } from 'flokit'

<Text alignItems='center'>
  I'm a text
</Text>
```

#### Props

| Prop | CSS Property | Type |
| :--- | :--- | :--- |
| `fontFamily` | `font-family` | `string`\|`array` |
| `textAlign` | `text-align` | `string`\|`array` |
| `lineHeight` | `line-height` | `string`\|`array` |
| `fontWeight` | `font-weight` | `string`\|`array` |
| `letterSpacing` | `letter-spacing` | `string`\|`array` |

### Heading

Primitive text component for headings. Extends `Text`.

```js
import { Heading } from 'flokit'

<Heading alignItems='center'>
  I'm a heading
</Heading>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://iagodahlem.mit-license.org/) © Iago Dahlem
