import { useZIndex } from '@/composables/useZIndex';

describe('useZIndex util function', () => {
  it('take [] and returns [classes]', () => {
    expect(useZIndex([], 10)).toEqual(['z-10']);
  });

  it('returns empty string array when z-index == undefined', () => {
    expect(useZIndex([], undefined)).toEqual([]);
  });
});
