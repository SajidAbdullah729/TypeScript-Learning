/**
Check if a number is a power of two or not!!
**/

export const isPowerOfTwo = (n: number): boolean => n > 0 && (n & (n - 1)) === 0
