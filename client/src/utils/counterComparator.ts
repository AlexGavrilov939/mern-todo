export type CounterComparator = (currentValue: number) => boolean;

export const createCounterComparator = (
  initialValue: number = 0
): CounterComparator => {
  let previousValue: number = initialValue;

  return (currentValue: number): boolean => {
    const isGreater: boolean = currentValue > previousValue;
    previousValue = currentValue;
    return isGreater;
  };
};
