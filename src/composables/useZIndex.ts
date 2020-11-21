export const useZIndex = (
  classNames: string[],
  zIndex: string | number | undefined
) => {
  if (zIndex) {
    const zDepth = parseFloat(`${zIndex}`);

    if (zDepth < 0) {
      classNames.push('z-n1');
    }

    if (zDepth % 10 !== 0 || zDepth > 50) {
      throw new Error(
        'It looks like you are using unavailable z-index' +
          'Please, use -1, 1, 10, 20 ... 50 z-indexes.'
      );
    }

    classNames.push(`z-${zDepth}`);
  }
  return classNames;
};
