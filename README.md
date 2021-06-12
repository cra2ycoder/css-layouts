# css-layouts

### Rules

- size: `width|minWt|maxWt & height|minHt|maxHt`
- padding: `top|right|bottom|left`
- margin: `top|right|bottom|left`

### Requirements

- layout properties

  - size: width, height, min-width, max-width, min-height, max-height
  - padding
  - margin
  - background-colors
  - position
  - align: self / children (content)
  - scrolling

- padding/margin algorithms should be standard
- font sizes algorithms should be standard

- layout

```jsx
// primitive
<Element.Wrapper /> => enableContainer => <Element.Container />
<Element.Box /> => default
<Element.FluidBox /> => no fixed width
<Element.FixedBox /> =>
<Element.AbsBox />
<Element.Mask /> => type: page/box (immediate parent)

// specific
<Layout.Header />
<Layout.Footer />
<Layout.NavBar />
<Layout.SideBar /> => pancake
<Layout.Card />
<Layout.Modal /> => modal, popup, overlay, toast

<Layout.Grid>
  <Element.FluidBox />
  <Element.FluidBox />
  ...
</Layout.Grid>

<Layout.FlexBox>
  <Element.FluidBox />
  <Element.FluidBox />
  ...
</Layout.FlexBox>
```

- typography

```jsx
<Text.Heading /> => h1 - h6
<Text.Paragraph /> => p
<Text.Plain /> => div/span
<Text.Link /> => a
<Text.Button /> => div role="button"
<Text.Label /> => label
```

- icons

```jsx
<Icon width={24} height={24} />
```

- images

```jsx
<Image.Banner />
<Image.Logo />
<Image.Box />
<Image.Thumbnail />
```

- shapes

```jsx
<Shape.Circle radius={100} />
<Shape.Rectangle width={100} height={200} />
<Shape.Square size={100} />
```
