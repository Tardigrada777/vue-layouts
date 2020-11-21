import { defineComponent, h } from 'vue';
import { getCustomStyles, slot } from '@/utils/components';

export const center = defineComponent({
  name: 'l-center',
  props: {
    full: {
      type: Boolean,
      default: true
    },
    x: {
      type: Boolean,
      default: false
    },
    y: {
      type: Boolean,
      default: false
    }
  },
  render() {
    if (this.$props.x && this.$props.y) {
      throw new Error(
        'It looks like you are using x and y props at the same time.' +
          'Please, use full prop instead.'
      );
    }

    const styles = getCustomStyles(this.$attrs);

    const classNames = ['l-center'];

    if (this.$props.x) {
      classNames.push('l-center--x');
    } else if (this.$props.y) {
      classNames.push('l-center--y');
    } else if (this.$props.full) {
      classNames.push('l-center--full');
    }

    return h(
      'div',
      {
        className: classNames.join(' '),
        style: { ...styles }
      },
      [slot(this.$slots.default)]
    );
  }
});
