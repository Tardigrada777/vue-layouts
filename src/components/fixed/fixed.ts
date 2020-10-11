import { defineComponent, h , Slot } from 'vue';

const px = (n: number) => `${n}px`;

const slot = (slot?: Slot) => slot ? slot() : null;

export const fixed = defineComponent({
  props: {
    top: {
      type: Number,
      default: () => null,
    },
    bottom: {
      type: Number,
      default: () => null,
    },
    left: {
      type: Number,
      default: () => null,
    },
    right: {
      type: Number,
      default: () => null,
    },
  },
  render() {
    return h(
      'span',
      {
        className: 'l-fixed',
        style: {
          top: this.$props.top ? px(this.$props.top) : null,
          bottom: this.$props.bottom ? px(this.$props.bottom) : null,
          left: this.$props.left ? px(this.$props.left) : null,
          right: this.$props.right ? px(this.$props.right) : null,
        }
      },
      [ slot(this.$slots.default) ],
    );
  }
});
