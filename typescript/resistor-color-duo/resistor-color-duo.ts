export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }

    this.colors = colors;
  }
  value = (): number =>
    Number(
      this.colors
        .slice(0, 2)
        .map(c => COLORS.indexOf(c))
        .join("")
    );
}

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
