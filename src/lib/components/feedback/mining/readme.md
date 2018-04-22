<strong>Default</strong>

```jsx
<Mining />
```

<strong>Theme</strong>
As many of the themes have white elements, some have been given dark
backgrounds in the examples for illustrative purposes.

```jsx
<div className="wrapper">
  <Mining />
  <Mining theme="blueOnTurquoise" />
  <Mining theme="darkOnTurquoise" />
  <div className="orange-background-inline">
    <Mining theme="oneColorNegative" />
  </div>
  <div className="orange-background-inline">
    <Mining theme="oneColorPositive" />
  </div>
  <Mining theme="primaryBlue" />
  <div className="orange-background-inline">
    <Mining theme="primaryPositive" />
  </div>
  <Mining theme="turquoiseOnBlue" />
  <div className="orange-background-inline">
    <Mining theme="whiteOnBlue" />
  </div>
</div>
```

<strong>Block color</strong>

```jsx
<div className="wrapper">
  <Mining blockColor="orange" />
  <Mining blockColor="#69D3F5" />
</div>
```

<strong>Pickaxe color</strong>

```jsx
<div className="wrapper">
  <Mining pickAxeColor="orange" />
  <Mining pickAxeColor="#69D3F5" />
</div>
```

<strong>Duration</strong>

```jsx
<div className="wrapper">
  <Mining duration={0.5} />
  <Mining />
  <Mining duration={3} />
</div>
```

<strong>Scale</strong>

```jsx
<div className="wrapper">
  <Mining scale={0.5} />
  <Mining />
  <Mining scale={1.5} />
</div>
```
