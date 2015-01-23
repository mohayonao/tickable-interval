"use strict";

import support from "source-map-support";
support.install();

import assert from "power-assert";
import {TickableInterval} from "../lib/tickable-interval";

describe("TickableInterval", ()=> {
  it("works", ()=> {
    var fired = 0;
    var interval = new TickableInterval();

    assert(interval instanceof TickableInterval);

    // setInterval
    interval.set(() => { fired += 1 }, 1000);
    assert(fired === 0);
    assert(interval.remain === 1000);

    // 00:00.000 -> 00:01.000
    interval.tick(250);
    assert(fired === 0);
    assert(interval.remain === 750);

    interval.tick(250);
    assert(fired === 0);
    assert(interval.remain === 500);

    interval.tick(250);
    assert(fired === 0);
    assert(interval.remain === 250);

    interval.tick(250);
    assert(fired === 1);
    assert(interval.remain === 1000);

    // 00:01.000 -> 00:02.000
    interval.tick(250);
    assert(fired === 1);
    assert(interval.remain === 750);

    interval.tick(250);
    assert(fired === 1);
    assert(interval.remain === 500);

    interval.tick(250);
    assert(fired === 1);
    assert(interval.remain === 250);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === 1000);

    // clearInterval
    interval.clear();

    // 00:02.000 -> 00:03.000
    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    // 00:03.000 -> 00:04.000
    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);

    interval.tick(250);
    assert(fired === 2);
    assert(interval.remain === Infinity);
  });
});
