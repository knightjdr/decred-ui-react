The divider component can be used to separate sections of a view.

<strong>Default</strong>

```jsx
<Divider />
```

<strong>Theme</strong>
As many of the themes have white elements, some have been given dark
backgrounds in the examples for illustrative purposes. Several themes are
differentiated by their primary (background) color and will therefore produce
the same result since the background is not displayed in this component.

```jsx
<div className="wrapper-vertical">
  <Divider />
  <Divider theme="blueOnTurquoise" />
  <Divider theme="darkOnTurquoise" />
  <div className="orange-background">
    <Divider theme="oneColorNegative"/>
  </div>
  <Divider theme="oneColorPositive" />
  <div className="orange-background">
    <Divider theme="primaryBlue" />
  </div>
  <div className="orange-background">
    <Divider theme="primaryNegative" />
  </div>
  <Divider theme="turquoiseOnBlue" />
  <div className="orange-background">
    <Divider theme="whiteOnBlue" />
  </div>
</div>
```

<strong>Ratio</strong>

```jsx
<div className="wrapper-vertical">
  <Divider ratio={5} />
  <Divider ratio={2} />
  <Divider />
  <Divider ratio={0.25} />
</div>
```

<strong>Icon</strong>

```jsx
<div className="wrapper-vertical">
  <Divider />
  <Divider icon="atomic" />
  <Divider icon="decrediton" />
  <Divider icon="guide" />
  <Divider icon="lightning" />
  <Divider icon="miner" />
  <Divider icon="politeia" />
  <Divider icon="voting" />
</div>
```

<strong>Icon color</strong>

```jsx
<div className="wrapper-vertical">
  <Divider iconColor="orange" />
  <Divider iconColor="#69D3F5" />
</div>
```

<strong>Icon only</strong>

```jsx
<Divider iconOnly={true} />
```

<strong>Text color</strong>

```jsx
<Divider textColor="#fd714a" />
```

<strong>Text only</strong>

```jsx
<Divider textOnly={true} />
```

<strong>Custom text</strong>
Plain text can be passed as a child element. For text that matches the styling of the
Decred logo, use the text prop. See the <a href="#text">text</a> section for details
on formatting this array prop.

```jsx
<div className="wrapper-vertical">
  <Divider />
  <Divider icon="politeia" text={[
    { case: 'upper', text: 'About ' },
    { case: 'lower', text: 'pol' },
    { case: 'upper', text: 'iteia' },
  ]} />
  <Divider textStyle={{ fontWeight: 800 }}>
    Custom text and style
  </Divider>
</div>
```

<strong>Scale</strong>

```jsx
<div className="wrapper-vertical">
  <Divider scale={0.75} />
  <Divider />
  <Divider scale={1.25} />
  <Divider scale={1.5} />
</div>
```
