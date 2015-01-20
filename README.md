# tickable-interval
[![NPM Version](http://img.shields.io/npm/v/tickable-interval.svg?style=flat)](https://www.npmjs.org/package/tickable-interval)

Manual ticking `setInterval`.

## Installation

```
npm install tickable-interval
```

## API

- `set(callback: function, interval: number): void`
- `clear(): void`
- `tick(tick: number): void`

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
