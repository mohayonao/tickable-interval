# tickable-interval
[![Build Status](http://img.shields.io/travis/mohayonao/tickable-interval.svg?style=flat)](https://travis-ci.org/mohayonao/tickable-interval)
[![NPM Version](http://img.shields.io/npm/v/tickable-interval.svg?style=flat)](https://www.npmjs.org/package/tickable-interval)
[![6to5](http://img.shields.io/badge/module-6to5-yellow.svg?style=flat)](https://6to5.org/)

Manual ticking `setInterval` / `clearInterval`

## Installation

npm:

```
npm install tickable-interval
```

## API

### TickableInterval
  - `TickableInterface()`

#### Instance properties
  - `callback: function`
  - `interval: number`
  - `remain: number`

#### Instance methods

- `set(callback: function, interval: number): void`
- `clear(): void`
- `tick(tick: number = 1): void`

## Example

```javascript
import {TickableInterval} from "tickable-interval";

var interval = new TickableInterval();

interval.set(()=> {
  console.log("fired");
}, 1000);

interval.tick(250);
interval.tick(250);
interval.tick(250);
interval.tick(250); // => "fired"

interval.tick(250);
interval.tick(250);
interval.tick(250);
interval.tick(250); // => "fired"

interval.clear();
```

## License

MIT
