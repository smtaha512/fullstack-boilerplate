export function propsSelector<T>(keysToSelect: (keyof T | string)[]) {
  return (obj: T) =>
    Object.entries(obj)
      .filter(([key]) => keysToSelect.includes(key))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as T);
}
