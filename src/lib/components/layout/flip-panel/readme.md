<strong>Default</strong>

```jsx
<FlipPanel />
```

<strong>Theme</strong>

```jsx
<div className="wrapper">
  <FlipPanel />
  <FlipPanel theme="darkBlue" />
  <FlipPanel theme="turquoise" />
  <FlipPanel theme="white" />
</div>
```

<strong>Shadow</strong>

```jsx
<div className="wrapper">
  <FlipPanel />
  <FlipPanel boxShadow={false} />
</div>
```

<strong>Background color</strong>

```jsx
<FlipPanel backgroundColor="orange" />
```

<strong>Text color</strong>

```jsx
<FlipPanel textColor="darkBlue" />
```

<strong>Dimensions</strong>

```jsx
<div className="wrapper">
  <FlipPanel dim={150} />
  <FlipPanel />
  <FlipPanel dim={250} />
</div>
```

<strong>Content</strong>
Content can be a string or another component.

```jsx
const politeiaBack = (
  <div>
    <div style={{ textAlign: 'justify' }}>
      <TextTransform color="white">
        {
          [
            { case: 'lower', text: 'pol' },
            { case: 'upper', text: 'iteia' },
          ]
        }
      </TextTransform> is a system for storing off-chain data that is both versioned
      and time-stamped
    </div>
    <div style={{ marginTop: 10, textAlign: 'left' }}>
      Learn more:
      <div style={{ marginLeft: 20 }}>
        <a
          href="https://blog.decred.org/2017/10/25/Politeia/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <TextTransform color="white">
            {
              [
                { case: 'lower', text: 'de' },
                { case: 'upper', text: 'cred' },
                { case: 'mixed', text: ' Blog' },
              ]
            }
          </TextTransform>
        </a>
      </div>
      <div style={{ marginLeft: 20 }}>
        <a
          href="https://github.com/decred/politeia"
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);
<FlipPanel
  back={politeiaBack}
  dim={220}
  front="Politeia: an unalterable public record of proposals, comments on proposals and stakeholder votes"
/>
```

<strong>Custom style</strong>

```jsx
<FlipPanel style={{ fontStyle: 'italic', fontWeight: 800 }} />
```
