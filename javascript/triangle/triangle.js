export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.isValid = a + b > c && a + c > b && b + c > a;
  }

  /**
   * has all three sides the same length
   */
  get isEquilateral() {
    return this.isValid && this.a === this.b && this.a === this.c;
  }

  /**
   * has at least two sides the same length
   */
  get isIsosceles() {
    return (
      this.isValid &&
      (this.a === this.b || this.a === this.c || this.b === this.c)
    );
  }

  /**
   * has all sides of different lengths
   */
  get isScalene() {
    return (
      this.isValid &&
      this.a !== this.b &&
      this.a !== this.c &&
      this.b !== this.c
    );
  }
}
