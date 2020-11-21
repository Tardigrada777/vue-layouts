import { defineComponent, h } from 'vue';
import { getCustomStyles, slot } from '@/utils/components';
import { px } from '@/utils/styles';

const stickyDirections = ['top', 'bottom', 'left', 'right'];

export const sticky = defineComponent({
  name: 'l-sticky',
  props: {
    to: {
      type: String,
      default: () => 'top',
      validator: (value: string) => stickyDirections.includes(value)
    },
    offset: {
      type: Number,
      default: () => 0
    }
  },
  render() {
    const { to, offset } = this.$props;
    const styles = getCustomStyles(this.$attrs);

    return h(
      'div',
      {
        className: 'l-sticky',
        style: {
          ...styles,
          [to]: px(offset)
        }
      },
      [slot(this.$slots.default)]
    );
  }
});
