import { defineComponent, h } from 'vue';
import { getCustomStyles, slot } from '@/utils/components';
import { commonProps } from './commonProps';
import { useZIndex } from '@/composables/useZIndex';

export const center = defineComponent({
  name: 'l-center',
  props: {
    ...commonProps,

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

    let classNames = ['l-center'];

    if (this.$props.x) {
      classNames.push('l-center--x');
    } else if (this.$props.y) {
      classNames.push('l-center--y');
    } else if (this.$props.full) {
      classNames.push('l-center--full');
    }

    classNames = useZIndex(classNames, this.$props.z);

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
