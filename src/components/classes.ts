/**
 * @category Globe
 * @module Globe Classes
 */

type PointType = [Point["0"], Point["1"]];
/**
 * @category Value
 * cartesian coordinates
 * @property {number} [0] x
 * @property {number} [1] y
 */
export class Point extends Array<number> {
  /* x */
  0: number;
  /* y */
  1: number;
  constructor(public x: number = 0, public y: number = 0) {
    super(2);
    this[0] = x;
    this[1] = y;
  }
  public toArray(): PointType {
    return [this[0], this[1]];
  }
}
const point = (x: number = 0, y: number = 0) => new Point(x, y);

const EMPTY_POINT = new Point();
type LineType = [PointType, PointType];
/**
 * @category Value
 * cartesian line
 * @property {Point} [0] a
 * @property {Point} [1] b
 */
export class Line extends Array<Point> {
  /* x */
  0: Point;
  /* y */
  1: Point;
  static point = point;
  constructor(public a: Point = EMPTY_POINT, public b: Point = EMPTY_POINT) {
    super(2);
    this[0] = a;
    this[1] = b;
  }
  public toArray(): LineType {
    return [this[0].toArray(), this[1].toArray()];
  }
}
/**
 * @category Value
 * cartesian line
 * @property {Point} origin top-left point
 * @property {Point} [0] width
 * @property {Point} [1] height
 */
export class Rectangle extends Array<Line> {
  /* top-left to bot-rigth */
  0: Line;
  /* bot-left to top-rigth */
  1: Line;
  constructor(public diagonal: Line = new Line()) {
    super(2);
    this[0] = diagonal;
    this[1] = new Line(
      new Point(diagonal.a.x, diagonal.b.y),
      new Point(diagonal.b.x, diagonal.a.y)
    );
  }
  public toArray() {
    return [...this[0].toArray(), ...this[1].toArray()];
  }
}
/**
 * @category Value
 * geographic coordinates
 * @property {number} [0] latitude
 * @property {number} [1] longitude
 */
export class Coord extends Point {
  constructor(public latitude: number = 0, public longitude: number = 0) {
    super(latitude, longitude);
    this[0] = latitude;
    this[1] = longitude;
  }
}
