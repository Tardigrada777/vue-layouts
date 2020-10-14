import { defineComponent, h } from 'vue';
import { px } from '@/utils/styles';
import { getCustomStyles, slot } from '@/utils/components';

export const fixed = defineComponent({
  name: 'l-fixed',
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
    const styles = getCustomStyles(this.$attrs);

    return h(
      'span',
      {
        className: 'l-fixed',
        style: {
          ...styles,
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
