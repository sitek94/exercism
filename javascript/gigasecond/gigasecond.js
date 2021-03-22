export function gigasecond(date) {
  const gsInMs = 10 ** 9 * 1000;

  return new Date(date.getTime() + gsInMs);
}
