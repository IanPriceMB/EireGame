export function randomZeroToXWhole(x:number):number {
  return Math.floor(Math.random() * (x - 0 + 1) + 0);
}
