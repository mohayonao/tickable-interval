"use strict";

/**
 * The manual ticking `setInterval` / `clearInterval`
 * @class
 * @property {function} callback
 * @property {number} delay
 * @property {number} remain
 */
export class TickableInterval {
  constructor() {
    this.callback = null;
    this.delay = Infinity;
    this.remain = Infinity;
  }

  /**
   * setInterval
   * @param {function} callback
   * @param {number} delay
   * @public
   */
  set(callback, delay) {
    this.callback = callback;
    this.delay = Math.max(1, +delay|0);
    this.remain = this.delay;
  }

  /**
   * clearInterval
   * @public
   */
  clear() {
    this.callback = null;
    this.delay = Infinity;
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
        this.remain += this.delay;
      }
    }
  }
}
