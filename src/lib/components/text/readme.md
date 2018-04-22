Text in the Decred logo contains a mixture of upper and lower case letters, with
'de' in lowercase and 'CRED' in uppercase with a smaller relative font size. You can
use the TextTransform component to generate similarly styled text in the Source Sans Pro
font. Text is passed to this component as a child array. This array should contain objects
with two keys: 'case' and 'text'. 'case' must be one of 'lower', 'mixed'
or 'upper' and text can be whatever you like. These objects will get merged into a string.
Spaces are allowed in text strings and can be placed at the beginning or end
of a string to create whitespace between words. You can also control the
font size, font color and the size ratio of upper to lower/mixed text.

```jsx
<div className="wrapper">
  <TextTransform />
  <TextTransform>
    {
      [
        { case: 'lower', text: 'pol' },
        { case: 'upper', text: 'iteia' },
      ]
    }
  </TextTransform>
  <TextTransform>
    {
      [
        { case: 'lower', text: 'lower' },
        { case: 'upper', text: 'upper ' },
        { case: 'mixed', text: 'mixed' },
        { case: 'upper', text: ' upper' },
        { case: 'lower', text: 'lower' },
      ]
    }
  </TextTransform>
</div>
```

<strong>Color</strong>

```jsx
<div className="wrapper">
  <TextTransform color="blue" />
  <TextTransform color="orange" />
  <TextTransform color="#69D3F5" />
</div>
```

<strong>Size</strong>

```jsx
<div className="wrapper">
  <TextTransform />
  <TextTransform size={36} />
</div>
```

<strong>Ratio</strong>

```jsx
<div className="wrapper">
  <TextTransform ratio={0.5} />
  <TextTransform />
  <TextTransform ratio={1} />
</div>
