# @rehmat-falcon/use-local-storage

> 

[![NPM](https://img.shields.io/npm/v/@rehmat-falcon/use-local-storage.svg)](https://www.npmjs.com/package/@rehmat-falcon/use-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This hook allows you to access the localstorage for a certain key.

Support for objects have been added. If your initial value is an object, it will deserialize when retrieving and serialize when saving the object.

## Install

```bash
npm install --save @rehmat-falcon/use-local-storage
```

## Usage

```jsx
import React, { Component } from 'react'

import { useLocalStorage } from '@rehmat-falcon/use-local-storage';

const Example = () => {
  const localStorageManager = useLocalStorage("key", {});
  // check if the key exists using localStorageManager.state.exists
  return (
    <div>{localStorageManager.state.value}</div>
  )
}
```

## Hook Definition
useLocalStorage(key, initialValue = "", override = false);

> key : The key in which to save the value

> initialValue : The value to use if no value is present

> override : If set to true, the initialValue will be saved into the localStorage by overriding the current value.


## License

MIT © [RehmatFalcon](https://github.com/RehmatFalcon)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
