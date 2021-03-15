export function steps(n, count = 0) {
  // Throw when invalid number provided
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  // Base case, return steps count
  if (n === 1) {
    return count;
  }

  // Number is even
  if (n % 2 === 0) {
    return steps(n / 2, count + 1);

    // Number is odd
  } else {
    return steps(1 + n * 3, count + 1);
  }
}
