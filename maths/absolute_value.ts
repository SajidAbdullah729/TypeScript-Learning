/**
 * @function absoluteValue
 * @description Calculate the absolute value of an input number.
 * @param {number} number - a numeric input value
 * @return {number} - Absolute number of input number
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @example absoluteValue(-10) = 10
 * @example absoluteValue(50) = 50
 * @example absoluteValue(0) = 0
 */

export const absoluteValue = (number: number): number => {
  return number < 0 ? -number : number
}
