export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    const date = new Date(null, null, null, this.hours, this.minutes);

    /**
     * Time in `hh:mm` format
     */
    const time = date.toTimeString().slice(0, 5);

    return time;
  }

  plus(minutes) {
    this.minutes += minutes;

    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;

    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
