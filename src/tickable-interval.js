"use strict";

/**
 * The manual ticking `setInterval` / `clearInterval`
 * @class
 * @property {function} callback
 * @property {number} interval
 * @property {number} remain
 */
export class TickableInterval {
  constructor() {
    this.callback = null;
    this.interval = Infinity;
    this.remain = Infinity;
  }

  /**
   * setInterval
   * @param {function} callback
   * @param {number} interval
   * @public
   */
  set(callback, interval) {
    this.callback = callback;
    this.interval = Math.max(1, +interval|0);
    this.remain = this.interval;
  }

  /**
   * clearInterval
   * @public
   */
  clear() {
    this.callback = null;
    this.interval = Infinity;
    this.remain = Infinity;
  }

  /**
   * ticking
   * @param {number} tick
   * @public
   */
  tick(tick = 1) {
    if (typeof this.callback === "function") {
      tick = Math.max(1, +tick|0);
      this.remain -= tick;
      while (this.remain <= 0) {
        this.callback();
        this.remain += this.interval;
      }
    }
  }
}
