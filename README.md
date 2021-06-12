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
<Element.Wrapper />
<Element.Container />
<Element.Box /> or <Element.Panel /> => default
<Element.FluidBox /> => no fixed width
<Element.FixedBox /> => modal, popup, overlay, toast
<Element.AbsBox />
<Element.Mask /> => type: page/box (immediate parent)

// specific
<Element.Header />
<Element.Footer />
<Element.Nav />
<Element.SideBar /> => pancake

<Element.Grid>
  <Element.GridItem />
  <Element.GridItem />
</Element.Grid>

<Element.FlexBox>
  <Element.FlexBoxItem />
  <Element.FlexBoxItem />
  <Element.FlexBoxItem />
</Element.FlexBox>
```

- typography

```jsx
<Text.Heading />
<Text.Paragraph />
<Text.Plain /> => div/span
<Text.Link /> => <a />
<Text.Button /> => <div role="button" />
<Text.FieldLabel /> => specifically for forms
```

- icons

```jsx
<Icon
```
