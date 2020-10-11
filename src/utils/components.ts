import { Slot } from 'vue';

export const slot = (slot?: Slot) => slot ? slot() : null;
