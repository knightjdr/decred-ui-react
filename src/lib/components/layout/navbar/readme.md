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
