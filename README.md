# React box styled

A React component to css for element.

## Installation

You can install this package using npm:

```bash
npm install react-box-styled
```

## Usage Example

```jsx
import Box, { FlexBox, GridBox } from 'react-box-styled';

<GridBox
  gridTemplateColumns="repeat(3, 1fr)"
  gridTemplateRows="auto"
  gap="10px"
  padding="10px"
>
  <Box gridArea="header">Header</Box>
  <Box gridArea="main">Main Content</Box>
  <Box gridArea="sidebar">Sidebar</Box>
</GridBox>

<FlexBox
  direction="row"
  justify="space-between"
  align="center"
  gap="1rem"
  padding="10px"
>
  <Box width="100px" textAlign="center">Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</FlexBox>
```

# Box Component

The `Box` component is a flexible container component that allows you to style and position its contents using a variety of CSS properties.

## Props

| Prop                  | Type                  | Description                                                                              |
| --------------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| `as`                  | `React.ElementType`   | Specifies the HTML element or React component to render. Defaults to a `div`.            |
| `cursor`              | `string`              | Sets the mouse cursor style when hovering over the element (e.g., `pointer`, `default`). |
| `width`               | `string`              | Defines the width of the element (e.g., `100%`, `200px`).                                |
| `minWidth`               | `string`              | Defines the min-width of the element (e.g., `100%`, `200px`).                                |
| `maxWidth`               | `string`              | Defines the max-width of the element (e.g., `100%`, `200px`).                                |
| `minHeight`               | `string`              | Defines the min-height of the element (e.g., `100%`, `200px`).                                |
| `maxHeight`               | `string`              | Defines the max-height of the element (e.g., `100%`, `200px`).                                |
| `height`              | `string`              | Defines the height of the element (e.g., `100%`, `200px`).                               |
| `padding`             | `string`              | Sets the padding inside the element (e.g., `10px`, `1rem`).                              |
| `paddingX`            | `string`              | Sets the horizontal padding (`padding-left` and `padding-right`).                        |
| `paddingY`            | `string`              | Sets the vertical padding (`padding-top` and `padding-bottom`).                          |
| `paddingTop`          | `string`              | Sets the padding at the top of the element.                                              |
| `paddingBottom`       | `string`              | Sets the padding at the bottom of the element.                                           |
| `paddingLeft`         | `string`              | Sets the padding on the left side of the element.                                        |
| `paddingRight`        | `string`              | Sets the padding on the right side of the element.                                       |
| `margin`              | `string`              | Defines the margin around the element.                                                   |
| `marginX`             | `string`              | Sets the horizontal margin (`margin-left` and `margin-right`).                           |
| `marginY`             | `string`              | Sets the vertical margin (`margin-top` and `margin-bottom`).                             |
| `marginLeft`          | `string`              | Sets the margin on the left side of the element.                                         |
| `marginRight`         | `string`              | Sets the margin on the right side of the element.                                        |
| `marginTop`           | `string`              | Sets the margin at the top of the element.                                               |
| `marginBottom`        | `string`              | Sets the margin at the bottom of the element.                                            |
| `border`              | `string`              | Defines the border around the element (e.g., `1px solid black`).                         |
| `borderX`             | `string`              | Sets the horizontal border (`border-left` and `border-right`).                           |
| `borderY`             | `string`              | Sets the vertical border (`border-top` and `border-bottom`).                             |
| `borderTop`           | `string`              | Sets the border at the top of the element.                                               |
| `borderRight`         | `string`              | Sets the border on the right side of the element.                                        |
| `borderBottom`        | `string`              | Sets the border at the bottom of the element.                                            |
| `borderLeft`          | `string`              | Sets the border on the left side of the element.                                         |
| `background`          | `string`              | Sets the background of the element (e.g., `red`, `url(image.jpg)`).                      |
| `backgroundColor`     | `string`              | Sets the background color of the element.                                                |
| `backgroundImage`     | `string`              | Defines the background image of the element.                                             |
| `backgroundPosition`  | `string`              | Sets the starting position of a background image (e.g., `center`, `top`).                |
| `backgroundSize`      | `string`              | Defines the size of the background image (e.g., `cover`, `contain`).                     |
| `backgroundRepeat`    | `string`              | Sets if/how the background image should repeat (e.g., `no-repeat`, `repeat`).            |
| `color`               | `string`              | Defines the text color inside the element.                                               |
| `fontSize`            | `string`              | Sets the font size of the text inside the element.                                       |
| `fontWeight`          | `string`              | Sets the font weight of the text inside the element (e.g., `bold`, `normal`).            |
| `textAlign`           | `string` | Aligns the text inside the element.                                   |
| `textDecoration`      | `string` | Sets the text decoration (e.g., `underline`, `line-through`).         |
| `textTransform`       | `string` | Controls the capitalization of text (e.g., `uppercase`, `lowercase`). |
| `lineHeight`          | `string`              | Sets the line height of the text inside the element.                                     |
| `position`            | `string` | "absolute" | "fixed" | "sticky"` | Specifies the positioning scheme of the element. |
| `top`                 | `string`              | Sets the top position of the element when `position` is not `static`.                    |
| `right`               | `string`              | Sets the right position of the element when `position` is not `static`.                  |
| `bottom`              | `string`              | Sets the bottom position of the element when `position` is not `static`.                 |
| `left`                | `string`              | Sets the left position of the element when `position` is not `static`.                   |
| `zIndex`              | `number`              | Controls the stacking order of the element.                                              |
| `borderRadius`        | `string`              | Sets the border-radius of the element (e.g., `5px`, `50%`).                              |
| `borderTopLeftRadius` | `string`              | Sets the border-radius of the top-left corner of the element.                            |
| `borderTopRightRadius`| `string`              | Sets the border-radius of the top-right corner of the element.                           |
| `borderBottomLeftRadius` | `string`            | Sets the border-radius of the bottom-left corner of the element.                         |
| `borderBottomRightRadius`| `string`            | Sets the border-radius of the bottom-right corner of the element.                        |
| `style`               | `React.CSSProperties` | Allows passing custom CSS styles to the element.                                         |
| `children`            | `React.ReactNode`     | Specifies the child elements or components to render inside the `Box` component.         |
| `overflow`            | `string` | Controls how content is clipped when it overflows the element's box.  |
| `className`           | `string`              | Allows passing a custom class name to the element for additional styling.                |
| `overflowX`           | `string`              | Controls horizontal overflow behavior.                                                   |
| `overflowY`           | `string`              | Controls vertical overflow behavior.                                                     |
| `display`        | `"block" \| "inline" \| ...`                      | Sets the display type of the element (e.g., `block`, `inline`, `none`).                      |
| `visibility`     | `"visible" \| "hidden" \| ...`                    | Controls the visibility of the element.                                                      |
| `opacity`        | `number`                                          | Sets the opacity level of the element, with `1` being fully opaque and `0` fully transparent.|
| `boxShadow`      | `string`                                          | Adds a shadow effect to the element's box.                                                   |
| `textShadow`     | `string`                                          | Adds a shadow effect to the text within the element.                                         |
| `transition`     | `string`                                          | Defines the transition effects when CSS properties change.                                   |
| `transform`      | `string`                                          | Applies a transformation to the element (e.g., `rotate`, `scale`).                           |
| `transformOrigin`| `string`                                          | Sets the origin point for transformations.                                                   |
| `animation`      | `string`                                          | Specifies the animation(s) to be applied to the element.                                     |
| `cursor`         | `string`                                          | Sets the mouse cursor style when hovering over the element (e.g., `pointer`, `default`).     |
| `pointerEvents`  | `"auto" \| "none"`                                | Specifies how an element responds to pointer events.                                         |
| `whiteSpace`     | `"normal" \| "nowrap" \| ...`                     | Controls how whitespace inside the element is handled.                                       |
| `wordBreak`      | `"normal" \| "break-all" \| ...`                  | Specifies how words should break when reaching the end of a line.                            |
| `textOverflow`   | `"clip" \| "ellipsis"`                            | Controls how text that overflows the element's box is rendered.                              |
| `letterSpacing`  | `string`                                          | Sets the spacing between characters in the text.                                             |
| `userSelect`     | `"auto" \| "none" \| ...`                         | Determines whether the text inside the element can be selected.                              |
| `filter`         | `string`                                          | Applies visual effects like blur or color shift to the element.                              |
| `mixBlendMode`   | `string`                                          | Defines how an element's content should blend with its background.                           |
| `backgroundClip` | `"border-box" \| "padding-box" \| "content-box" \| "text"` | Specifies the painting area of the background.                                |
| `outline`        | `string`                                          | Sets the outline around the element, typically used for focus styles.                        |
| `outlineOffset`  | `string`                                          | Defines the distance between the outline and the element's border edge.                      |
| `content`        | `string`                                          | Specifies the content to be inserted before or after an element using `::before` or `::after`.|
| `float`          | `"left" \| "right" \| "none"`                     | Determines the float behavior of the element.                                                |
| `clear`          | `"left" \| "right" \| "both" \| "none"`           | Specifies the sides of the element where floating elements are not allowed.                  |
| `verticalAlign`  | `string`                                          | Sets the vertical alignment of an inline or table-cell element.                              |
| `resize`         | `"none" \| "both" \| "horizontal" \| "vertical"`  | Controls the resizability of an element.                                                     |
| `appearance`     | `string`                                          | Controls the styling of an element based on the operating system's native appearance.        |



# FlexBox Component

The `FlexBox` component is an extension of the `Box` component, designed for creating flexible layouts using CSS Flexbox. It inherits all the props from `BoxProps` and adds additional props specific to Flexbox.

## Props

### Inherited from `BoxProps`

The `FlexBox` component inherits all props from the `Box` component. Please refer to the [BoxProps documentation](#BoxProps) for a detailed description of these props.

### Additional Flexbox Props

| Prop           | Type                                      | Description                                                  |
| -------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `gap`          | `string`                                  | Defines the space between flex items (e.g., `10px`, `1rem`). |
| `display`      | `string`                    | Sets the display property for the flex container. Defaults to `"flex"`. |
| `direction`    | `string`                            | Specifies the flex direction (`"row"` is horizontal, `"col"` is vertical). |
| `wrap`         | `string`         | Controls how flex items wrap in the container. |
| `justify`      | `string`   | Aligns the flex items along the main axis of the container. |
| `align`        | `string`   | Aligns the flex items along the cross axis of the container. |
| `alignContent` | `string`   | Aligns the lines of flex items within the container when there is extra space in the cross axis. |

# GridBox Component

The `GridBox` component is an extension of the `Box` component, designed for creating grid-based layouts using CSS Grid. It inherits all the props from `BoxProps` and adds additional props specific to Grid.

## Props

### Inherited from `BoxProps`

The `GridBox` component inherits all props from the `Box` component. Please refer to the [BoxProps documentation](#BoxProps) for a detailed description of these props.

### Additional Grid Props

| Prop                  | Type                                     | Description                                                             |
| --------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| `display`             | `string`                   | Sets the display property for the grid container. Defaults to `"grid"`. |
| `gridTemplateColumns` | `string`                                 | Defines the columns of the grid (e.g., `repeat(3, 1fr)`, `100px 1fr`). |
| `gridTemplateRows`    | `string`                                 | Defines the rows of the grid (e.g., `auto 1fr`).                        |
| `gridTemplateAreas`   | `string`                                 | Defines named grid areas (e.g., `"header header" "sidebar main"`).      |
| `gridColumn`          | `string`                                 | Specifies which column the grid item should occupy (e.g., `span 2`).    |
| `gridRow`             | `string`                                 | Specifies which row the grid item should occupy (e.g., `1 / 3`).        |
| `gridAutoColumns`     | `string`                                 | Defines the size of any auto-generated columns.                         |
| `gridAutoRows`        | `string`                                 | Defines the size of any auto-generated rows.                            |
| `gridAutoFlow`        | `string` | Controls how auto-placed items are inserted in the grid. |
| `justifyItems`        | `string` | Aligns grid items along the inline (row) axis within their grid areas.   |
| `alignItems`          | `string` | Aligns grid items along the block (column) axis within their grid areas. |
| `justifyContent`      | `string` | Aligns the grid container's content along the inline (row) axis. |
| `alignContent`        | `string` | Aligns the grid container's content along the block (column) axis. |
| `justifySelf`         | `string` | Aligns the grid item along the inline (row) axis within its grid area.   |
| `alignSelf`           | `string` | Aligns the grid item along the block (column) axis within its grid area. |
| `gap`                 | `string`                                 | Defines the gap between grid items (e.g., `10px`, `1rem`).              |
| `gridArea`            | `string`                                 | Specifies the named grid area the item should be placed in.             |

