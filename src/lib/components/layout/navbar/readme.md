The Navbar component can be either fixed or positioned absolutely so that it will
scroll with the page. All of the examples here use absolute positioning to fit
within the styleguide layout.

<strong>Default</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      fixed={false}
      links={[
        { route: '/', text: 'DECRED'},
        { route: '/', text: 'POLITEIA'},
      ]}
    />
  </div>
</BrowserRouter>
```

<strong>Theme</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-multiple">
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="blueOnTurquoise"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="darkOnTurquoise"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="oneColorNegative"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="oneColorPositive"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="primaryBlue"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="primaryNegative"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="primaryPositive"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="turquoiseOnBlue"
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
        theme="whiteOnBlue"
      />
    </div>
  </div>
</BrowserRouter>
```

<strong>Background</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      background={false}
      fixed={false}
      links={[
        { route: '/', text: 'DECRED'},
        { route: '/', text: 'POLITEIA'},
      ]}
    />
  </div>
</BrowserRouter>
```

<strong>Shadow</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-multiple">
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        boxShadow={false}
        fixed={false}
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
  </div>
</BrowserRouter>
```

<strong>Icon</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-multiple">
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="atomic"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="dcr"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="decrediton"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="guide"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="lightning"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="miner"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="politeia"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        icon="voting"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
  </div>
</BrowserRouter>
```

<strong>Icon color</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-multiple">
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        iconColor="orange"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        iconColor="#69D3F5"
        links={[
          { route: '/', text: 'DECRED'},
          { route: '/', text: 'POLITEIA'},
        ]}
      />
    </div>
  </div>
</BrowserRouter>
```

<strong>Links</strong>
The Navbar component assumes you are using react router for navigation. If you
are not or wish to include a url link, set the href key to true and pass the url
via the route.

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      fixed={false}
      links={[
        { href: true, route: 'https://www.decred.org/', text: 'DECRED'},
        { href: true, route: 'https://blog.decred.org/2017/10/25/Politeia/', text: 'POLITEIA'},
      ]}
    />
  </div>
</BrowserRouter>
```

<strong>Link text</strong>
Themed text can be used for links by making use of the TextTransform component.
See the <a href="#text">text</a> section for details on creating this component.
If you use the TextTransform component you will also have to include a custom key
in the links prop for each route.

```jsx
const { BrowserRouter } = require('react-router-dom');
const decred = (
  <TextTransform>
    {
      [
        { case: 'lower', text: 'de' },
        { case: 'upper', text: 'cred' },
      ]
    }
  </TextTransform>
);
const politeia = (
  <TextTransform>
    {
      [
        { case: 'lower', text: 'pol' },
        { case: 'upper', text: 'iteia' },
      ]
    }
  </TextTransform>
);
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      fixed={false}
      links={[
        { key: 'decred', route: '/', text: decred},
        { key: 'politeia', route: '/', text: politeia},
      ]}
    />
  </div>
</BrowserRouter>
```
