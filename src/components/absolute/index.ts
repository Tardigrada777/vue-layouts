import { defineComponent, h } from 'vue';
import { slot } from "@/utils/components";
import { px } from "@/utils/styles";

export const absolute = defineComponent({
  name: 'l-absolute',
  render() {
    return h('div', {
      className: 'l-absolute',
      style: {
        ...this.$attrs.style as object,
      },
    }, [ slot(this.$slots.default) ] );
  },
});

export const absoluteItem = defineComponent({
  name: 'l-absolute-item',
  props: {
    x: {
      type: [ Number, String ],
      default: () => 0,
    },
    y: {
      type: [ Number, String ],
      default: () => 0,
    }
  },
  render() {
    if (this.$parent && this.$parent.$options.name !== 'l-absolute')  {
      throw new Error('It looks like you are using l-absolute-item component outside the l-absolute component.');
    }
    return h('div', {
      className: 'l-absolute__item',
      style: {
        ...this.$attrs.style as object,
        top: typeof this.y === 'string' ? this.y : px(this.y),
        left: typeof this.x === 'string' ? this.x : px(this.x)
      },
    });
  }
});
