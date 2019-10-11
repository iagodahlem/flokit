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

* For scale props as `const spaces = [0, 4, 8, 16, 32]` for defining `margin` and `padding`, you can use numbers from 0 to the length of the scale.

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

| Prop | CSS Property | Type | Theme |
| :--- | :--- | :--- | :--- |
| `position`              | `position`                         | `string`\|`array`           | none |
| `zIndex`                | `z-index`                          | `string`\|`array`           | `zIndices` |
| `top`                   | `top`                              | `string`\|`array`           | none |
| `right`                 | `right`                            | `string`\|`array`           | none |
| `bottom`                | `bottom`                           | `string`\|`array`           | none |
| `left`                  | `left`                             | `string`\|`array`           | none |
| `display`               | `display`                          | `string`\|`array`           | none |
| `width`                 | `width`                            | `string`\|`number`\|`array` | `sizes` |
| `height`                | `height`                           | `string`\|`number`\|`array` | `sizes` |
| `minWidth`              | `min-width`                        | `string`\|`number`\|`array` | `sizes` |
| `maxWidth`              | `max-width`                        | `string`\|`number`\|`array` | `sizes` |
| `minHeight`             | `min-height`                       | `string`\|`number`\|`array` | `sizes` |
| `maxHeight`             | `max-height`                       | `string`\|`number`\|`array` | `sizes` |
| `size`                  | `width` & `height`                 | `string`\|`number`\|`array` | `sizes` |
| `verticalAlign`         | `vertical-align`                   | `string`\|`array`           | none |
| `overflow`              | `overflow`                         | `string`\|`array`           | none |
| `m`\|`margin`           | `margin`                           | `string`\|`number`\|`array` | `space` |
| `mt`\|`marginTop`       | `margin-top`                       | `string`\|`number`\|`array` | `space` |
| `mr`\|`marginRight`     | `margin-right`                     | `string`\|`number`\|`array` | `space` |
| `mb`\|`marginBottom`    | `margin-bottom`                    | `string`\|`number`\|`array` | `space` |
| `ml`\|`marginLeft`      | `margin-left`                      | `string`\|`number`\|`array` | `space` |
| `mx`\|`marginX`         | `margin-left` & `margin-right`     | `string`\|`number`\|`array` | `space` |
| `my`\|`marginY`         | `margin-top` & `margin-bottom`     | `string`\|`number`\|`array` | `space` |
| `p`\|`padding`          | `padding`                          | `string`\|`number`\|`array` | `space` |
| `pt`\|`paddingTop`      | `padding-top`                      | `string`\|`number`\|`array` | `space` |
| `pr`\|`paddingRight`    | `padding-right`                    | `string`\|`number`\|`array` | `space` |
| `pb`\|`paddingBottom`   | `padding-bottom`                   | `string`\|`number`\|`array` | `space` |
| `pl`\|`paddingLeft`     | `padding-left`                     | `string`\|`number`\|`array` | `space` |
| `px`                    | `padding-left` & `padding-right`   | `string`\|`number`\|`array` | `space` |
| `py`                    | `padding-top` & `padding-bottom`   | `string`\|`number`\|`array` | `space` |
| `background`            | `background`                       | `string`\|`array`           | none |
| `backgroundImage`       | `background-image`                 | `string`\|`array`           | none |
| `backgroundSize`        | `background-size`                  | `string`\|`array`           | none |
| `backgroundPosition`    | `background-position`              | `string`\|`array`           | none |
| `backgroundRepeat`      | `background-repeat`                | `string`\|`array`           | none |
| `border`                | `border`                           | `string`\|`array`           | `borders` |
| `borderWidth`           | `border-width`                     | `string`\|`array`           | `borderWidths` |
| `borderStyle`           | `border-style`                     | `string`\|`array`           | `borderStyles` |
| `borderColor`           | `border-color`                     | `string`\|`array`           | `colors`  |
| `borderRadius`          | `border-radius`                    | `string`\|`number`\|`array` | `radii` |
| `borderTop`             | `border-top`                       | `string`\|`array`           | `borders` |
| `borderRight`           | `border-right`                     | `string`\|`array`           | `borders` |
| `borderBottom`          | `border-bottom`                    | `string`\|`array`           | `borders` |
| `borderLeft`            | `border-left`                      | `string`\|`array`           | `borders` |
| `textShadow`            | `text-shadow`                      | `string`\|`array`           | `shadows` |
| `boxShadow`             | `box-shadow`                       | `string`\|`array`           | `shadows` |
| `color`                 | `color`                            | `string`\|`array`           | `colors` |
| `bg`\|`backgroundColor` | `background-color`                 | `string`\|`array`           | `colors` |
| `opacity`               | `opacity`                          | `string`\|`array`           | none |
| `flex`                  | `flex`                             | `string`\|`array`           | none |
| `flex-grow`             | `flex-grow`                        | `string`\|`array`           | none |
| `flex-shrink`           | `flex-shrink`                      | `string`\|`array`           | none |
| `flex-basis`            | `flex-basis`                       | `string`\|`array`           | none |
| `justifySelf`           | `justify-self`                     | `string`\|`array`           | none |
| `alignSelf`             | `align-self`                       | `string`\|`array`           | none |
| `order`                 | `order`                            | `string`\|`array`           | none |

### Flex

Primitive flexbox component. Extends `Box`.

```js
import { Flex } from 'flokit'

<Flex alignItems='center'>
  I'm a flexbox
</Flex>
```

#### Props

| Prop | CSS Property | Type | Theme |
| :--- | :--- | :--- | :--- |
| `alignItems`     | `align-items`     | `string`\|`array` | none |
| `alignContent`   | `align-content`   | `string`\|`array` | none |
| `justifyItems`   | `justify-items`   | `string`\|`array` | none |
| `justifyContent` | `justify-content` | `string`\|`array` | none |
| `flexWrap`       | `flex-wrap`       | `string`\|`array` | none |
| `flexDirection`  | `flex-direction`  | `string`\|`array` | none |

### Text

Primitive text component. Extends `Box`.

```js
import { Text } from 'flokit'

<Text alignItems='center'>
  I'm a text
</Text>
```

#### Props

| Prop | CSS Property | Type | Theme |
| :--- | :--- | :--- | :--- |
| `fontFamily`    | `font-family`    | `string`\|`number`\|`array` | `fonts` |
| `fontSize`      | `font-size`      | `string`\|`number`\|`array` | `fontSizes` |
| `fontWeight`    | `font-weight`    | `string`\|`number`\|`array` | `fontWeights` |
| `lineHeight`    | `line-height`    | `string`\|`number`\|`array` | `lineHeights` |
| `letterSpacing` | `letter-spacing` | `string`\|`number`\|`array` | `letterSpacings` |
| `fontStyle`     | `font-style`     | `string`\|`number`\|`array` | none |
| `textAlign`     | `text-align`     | `string`\|`number`\|`array` | none |
| `textTransform` | `text-transform` | `string`\|`number`\|`array` | none |

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
