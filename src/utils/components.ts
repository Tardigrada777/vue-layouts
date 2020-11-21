import { Slot } from 'vue';

export const slot = (slot?: Slot) => (slot ? slot() : null);

export const getCustomStyles = (attrs: Record<string, unknown>) => {
  let styles = {};
  if (attrs.style) {
    styles = attrs.style as object;
  }
  return styles;
};
