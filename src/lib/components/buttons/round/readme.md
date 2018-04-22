<strong>Default style</strong>

```jsx
<RoundButton />
```

<strong>Theme</strong>

```jsx
<div className="wrapper">
  <RoundButton />
  <RoundButton theme="blueOnTurquoise" />
  <RoundButton theme="darkOnTurquoise" />
  <RoundButton theme="oneColorNegative" />
  <RoundButton theme="oneColorPositive" />
  <RoundButton theme="primaryBlue" />
  <RoundButton theme="primaryPositive" />
  <RoundButton theme="turquoiseOnBlue" />
  <RoundButton theme="whiteOnBlue" />
</div>
```

<strong>Shadow</strong>

```jsx
<div className="wrapper">
  <RoundButton theme="blueOnTurquoise" />
  <RoundButton boxShadow={false} theme="blueOnTurquoise" />
</div>
```

<strong>Icon</strong>

```jsx
<div className="wrapper">
  <RoundButton />
  <RoundButton icon="atomic" />
  <RoundButton icon="decrediton" />
  <RoundButton icon="guide" />
  <RoundButton icon="lightning" />
  <RoundButton icon="miner" />
  <RoundButton icon="politeia" />
  <RoundButton icon="voting" />
</div>
```

<strong>Icon color</strong>

```jsx
<div className="wrapper">
  <RoundButton iconColor="orange" />
  <RoundButton iconColor="#69D3F5" />
</div>
```

<strong>Scale</strong>

```jsx
<div className="wrapper">
  <RoundButton scale={0.5} />
  <RoundButton scale={0.75} />
  <RoundButton />
  <RoundButton scale={1.25} />
  <RoundButton scale={1.5} />
</div>
```

<strong>Custom style</strong>

```jsx
<RoundButton style={{backgroundColor: '#fd714a', border: '3px solid #0c1e3e'}} />
```
