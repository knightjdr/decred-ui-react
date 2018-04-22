<strong>Default style</strong>

```jsx
<RectangularButton />
```

<strong>Theme</strong>

```jsx
<div className="wrapper">
  <RectangularButton />
  <RectangularButton theme="blueOnTurquoise" />
  <RectangularButton theme="darkOnTurquoise" />
  <RectangularButton theme="oneColorNegative" />
  <RectangularButton theme="oneColorPositive" />
  <RectangularButton theme="primaryBlue" />
  <RectangularButton theme="primaryPositive" />
  <RectangularButton theme="turquoiseOnBlue" />
  <RectangularButton theme="whiteOnBlue" />
</div>
```

<strong>Shadow</strong>

```jsx
<div className="wrapper">
  <RectangularButton theme="blueOnTurquoise" />
  <RectangularButton boxShadow={false} theme="blueOnTurquoise" />
</div>
```

<strong>Icon</strong>

```jsx
<div className="wrapper">
  <RectangularButton />
  <RectangularButton icon="atomic" />
  <RectangularButton icon="decrediton" />
  <RectangularButton icon="guide" />
  <RectangularButton icon="lightning" />
  <RectangularButton icon="miner" />
  <RectangularButton icon="politeia" />
  <RectangularButton icon="voting" />
</div>
```

<strong>Icon color</strong>

```jsx
<div className="wrapper">
  <RectangularButton iconColor="orange" />
  <RectangularButton iconColor="#69D3F5" />
</div>
```

<strong>Icon only</strong>

```jsx
<RectangularButton iconOnly={true} />
```

<strong>Text color</strong>

```jsx
<RectangularButton textColor="#fd714a" />
```

<strong>Text only</strong>

```jsx
<RectangularButton textOnly={true} />
```

<strong>Custom text</strong>
Plain text can be passed as a child element. For text that matches the styling of the
decred logo, use the text prop. See the <a href="#text">text</a> section for details
on formatting this array prop.

```jsx
<div className="wrapper">
  <RectangularButton />
  <RectangularButton text={[
    { case: 'lower', text: 'de' },
    { case: 'upper', text: 'cred' },
    { case: 'mixed', text: 'Pay' }
  ]} />
  <RectangularButton icon="decrediton" text={[
    { case: 'lower', text: 'de' },
    { case: 'upper', text: 'cred' },
    { case: 'lower', text: 'iton' },
  ]} />
  <RectangularButton icon="politeia" text={[
    { case: 'lower', text: 'pol' },
    { case: 'upper', text: 'iteia' },
  ]} />
  <RectangularButton style={{ fontWeight: 800 }}>
    Custom text and style
  </RectangularButton>
</div>
```

<strong>Scale</strong>

```jsx
<div className="wrapper">
  <RectangularButton scale={0.5} />
  <RectangularButton scale={0.75} />
  <RectangularButton />
  <RectangularButton scale={1.25} />
  <RectangularButton scale={1.5} />
</div>
```

<strong>Custom style</strong>

```jsx
<RectangularButton style={{backgroundColor: '#fd714a'}} />
```
