## classmap-utility

A small utility function that builds CSS class lists

## Installation

Using npm
```shell
$ npm i ltsochev-classmap
```

## Usage

```javascript
import classMap from 'ltsochev-classmap';

...

console.log(classMap({'mobile': isMobile, 'desktop': !isMobile}));
```
