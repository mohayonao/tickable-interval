"use strict";

/**
 * The manual ticking `setInterval`
 * @class TickableInterval
 */
export class TickableInterval {
  constructor() {
    if (!(this instanceof TickableInterval)) {
      return new TickableInterval();
    }

    var _callback = null;
    var _interval = Infinity;
    var _remain = Infinity;

    /**
     * @api public
     * @param {function} callback
     * @param {number} interval
     */
    this.set = (callback, interval)=> {
      _callback = callback;
      _interval = Math.max(1, +interval);
      _remain = _interval;
    };

    /**
     * @api public
     */
    this.clear = ()=> {
      _callback = null;
      _interval = Infinity;
      _remain = Infinity;
    };

    /**
     * @api public
     * @param {number} tick
     */
    this.tick = (tick)=> {
      if (typeof _callback === "function") {
        _remain -= tick;
        while (_remain <= 0) {
          _callback();
          _remain += _interval;
        }
      }
    };
  }
}
