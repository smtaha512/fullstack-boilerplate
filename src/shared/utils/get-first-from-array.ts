export function getFirstFromArray<T>(arr: T[]): T {
  return arr.length ? arr[0] : ({} as T);
}
