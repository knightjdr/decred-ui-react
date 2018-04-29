# Decred UI React library
[![npm version](https://badge.fury.io/js/decred-ui-react.svg)](https://badge.fury.io/js/decred-ui-react)

A collection of [Decred](https://decred.org/) themed UI elements for
your React project.

## Install

`npm i --save decred-ui-react`

Add the following line to your App.css file (or similar location):

`@import '~decred-ui-react/build/decred-ui-react.css'`

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import { RoundButton } from 'decred-ui-react'

ReactDOM.render(
  <RoundButton />,
  document.getElementById('root'),
);
```

See the [Style Guide](https://knightjdr.github.io/decred-ui-react/) for
detailed usage examples.

## Tests

`npm test`
