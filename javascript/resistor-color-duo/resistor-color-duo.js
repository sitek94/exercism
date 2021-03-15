export function decodedValue(colors) {
  return Number(
    colors
      .slice(0, 2)
      .map(c => COLORS.indexOf(c))
      .join(''),
  );
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
