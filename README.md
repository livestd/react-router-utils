[![NPM](https://img.shields.io/npm/v/@livestd/react-router-utils.svg)](https://www.npmjs.com/package/@livestd/react-router-utils)

Utils and hooks for react-router

## Installation
```js
npm install --save @livestd/react-router-utils
```

# useQuery

```js
interface Query {
  // properties
  params: Record<string, any>;
  // methods
  push: (params: {}) => void;
  replace: (params: {}) => void; // replace on history
}

// type
useQuery = (): Query;
```

## Usage

```js
import { useQuery } from '@livestd/react-router-utils';

const Component = () => {
  const {params, push} = useQuery();
  
  useEffect(() => console.log(params));
  
  const pushParam = () => {
    push({param: 1});
  };
  
  return (<button onClick={pushParam} />)
}
```