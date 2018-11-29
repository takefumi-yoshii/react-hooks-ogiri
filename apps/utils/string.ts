export const padddingZero = (
  num: number,
  digit: number
): string => {
  return `000${num}`.slice(digit * -1)
}
