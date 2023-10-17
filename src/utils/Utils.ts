export const findIndexByProperty = <T, K extends keyof T>(
    arr: T[],
    propertyName: K,
    propertyValue: T[K]
  ): number => {
    const index = arr.findIndex(obj => obj[propertyName] === propertyValue);
    return index;
  };
  