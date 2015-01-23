"use strict";

import assert from "power-assert";
import {TickableInterval} from "../lib/tickable-interval";

describe("TickableInterval", ()=> {
  it("works", ()=> {
    var fired = 0;
    var interval = new TickableInterval();

    assert(interval instanceof TickableInterval);

    // setInterval
    interval.set(() => { fired += 1 }, 1000);
    assert(fired === 0, "00:00.000");
    assert(interval.remain === 1000, "00:00.000");

    // 00:00.000 -> 00:01.000
    interval.tick(250);
    assert(fired === 0, "00:00.250");
    assert(interval.remain === 750, "00:00.250");

    interval.tick(250);
    assert(fired === 0, "00:00.500");
    assert(interval.remain === 500, "00:00.500");

    interval.tick(250);
    assert(fired === 0, "00:00.750");
    assert(interval.remain === 250, "00:00.750");

    interval.tick(250);
    assert(fired === 1, "00:01.000");
    assert(interval.remain === 1000, "00:01.000");

    // 00:01.000 -> 00:02.000
    interval.tick(250);
    assert(fired === 1, "00:01.250");
    assert(interval.remain === 750, "00:01.250");

    interval.tick(250);
    assert(fired === 1, "00:01.500");
    assert(interval.remain === 500, "00:01.500");

    interval.tick(250);
    assert(fired === 1, "00:01.750");
    assert(interval.remain === 250, "00:01.750");

    interval.tick(250);
    assert(fired === 2, "00:02.000");
    assert(interval.remain === 1000, "00:02.000");

    // clearInterval
    interval.clear();

    // 00:02.000 -> 00:03.000
    interval.tick(250);
    assert(fired === 2, "00:02.250");
    assert(interval.remain === Infinity, "00:02.250");

    interval.tick(250);
    assert(fired === 2, "00:02.500");
    assert(interval.remain === Infinity, "00:02.500");

    interval.tick(250);
    assert(fired === 2, "00:02.750");
    assert(interval.remain === Infinity, "00:02.750");

    interval.tick(250);
    assert(fired === 2, "00:03.000");
    assert(interval.remain === Infinity, "00:03.000");

    // 00:03.000 -> 00:04.000
    interval.tick(250);
    assert(fired === 2, "00:03.250");
    assert(interval.remain === Infinity, "00:03.250");

    interval.tick(250);
    assert(fired === 2, "00:03.500");
    assert(interval.remain === Infinity, "00:03.500");

    interval.tick(250);
    assert(fired === 2, "00:03.750");
    assert(interval.remain === Infinity, "00:03.750");

    interval.tick(250);
    assert(fired === 2, "00:04.000");
    assert(interval.remain === Infinity, "00:04.000");
  });
});
