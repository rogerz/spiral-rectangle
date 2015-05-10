'use strict';

/*

https://github.com/jasondavies/d3-cloud/issues/40

Technically it’s a square spiral, but with the step sizes scaled to match the rectangular extent.

For a given value of our integer parameter t, we’d like to find the direction of the corresponding leg.

First, examine the length of each “leg” of the spiral (every time it changes direction): the sequence is 1, 1, 3, 3, 6, 6, 10, 10, …

Very similar to triangular numbers, except that the length of a leg changes every 2nd leg, so the leg length Li = Tfloor(i/2).

If we can determine the step i for our parameter t, then we can determine the direction.

The curious formula is similar to finding the triangular root, but modified to take into account that the leg length changes every second step. We perform a bitwise operation on the root x, which gives us the two least significant bits of floor(x) and hence one of four directions.

 */

function SpiralRectangle(width, height, step) {
	var dx = step,
		dy = dx * height / width,
		x = 0,
		y = 0;
	return function (t) {
		var sign = t < 0 ? -1 : 1;
		switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
			case 0: x += dx; break;
			case 1: y += dy; break;
			case 2: x -= dx; break;
			case 3: y -= dy; break;
			default: throw new Error('invalid case');
		}
		return {
			x: x,
			y: y
		};
	};
}

module.exports = SpiralRectangle;