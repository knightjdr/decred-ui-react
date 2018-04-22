The header component provides a simple way of titling a section with an
appropriately styled logo and text.

<strong>Default</strong>

```jsx
<Header />
```

<strong>Theme</strong>
As many of the themes have white elements, some have been given dark
backgrounds in the examples for illustrative purposes. Several themes are
differentiated by their primary (background) color and will therefore produce
the same result since the background is not displayed in this component.

```jsx
<div className="wrapper-vertical">
  <Header />
  <Header theme="blueOnTurquoise" />
  <Header theme="darkOnTurquoise" />
  <div className="orange-background">
    <Header theme="oneColorNegative"/>
  </div>
  <Header theme="oneColorPositive" />
  <div className="orange-background">
    <Header theme="primaryBlue" />
  </div>
  <div className="orange-background">
    <Header theme="primaryNegative" />
  </div>
  <Header theme="turquoiseOnBlue" />
  <div className="orange-background">
    <Header theme="whiteOnBlue" />
  </div>
</div>
```

<strong>Icon</strong>

```jsx
<div className="wrapper-vertical">
  <Header />
  <Header icon="atomic" />
  <Header icon="decrediton" />
  <Header icon="guide" />
  <Header icon="lightning" />
  <Header icon="miner" />
  <Header icon="politeia" />
  <Header icon="voting" />
</div>
```

<strong>Icon color</strong>

```jsx
<div className="wrapper-vertical">
  <Header iconColor="orange" />
  <Header iconColor="#69D3F5" />
</div>
```

<strong>Icon only</strong>

```jsx
<Header iconOnly={true} />
```

<strong>Text color</strong>

```jsx
<Header textColor="#fd714a" />
```

<strong>Text only</strong>

```jsx
<Header textOnly={true} />
```

<strong>Custom text</strong>
Plain text can be passed as a child element. For text that matches the styling of the
Decred logo, use the text prop. See the <a href="#text">text</a> section for details
on formatting this array prop.

```jsx
<div className="wrapper-vertical">
  <Header />
  <Header icon="politeia" text={[
    { case: 'upper', text: 'About ' },
    { case: 'lower', text: 'pol' },
    { case: 'upper', text: 'iteia' },
  ]} />
  <Header textStyle={{ fontWeight: 800 }}>
    Custom text and style
  </Header>
</div>
```

<strong>Scale</strong>

```jsx
<div className="wrapper-vertical">
  <Header scale={0.75} />
  <Header />
  <Header scale={1.25} />
  <Header scale={1.5} />
</div>
```
