import { shallowMount } from '@vue/test-utils';
import { sticky } from '@/components/sticky';

describe('l-sticky', () => {
  it('renders correctly without props', () => {
    const wrapper = shallowMount(sticky);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.l-sticky').exists()).toBeTruthy();
  });

  it('renders props.offset by default with 0px', () => {
    const wrapper = shallowMount(sticky);
    expect(wrapper.find<HTMLElement>('.l-sticky').element.style.top).toEqual(
      '0px'
    );
  });

  it('renders props.offset correctly', () => {
    const offset = 15;

    const wrapper = shallowMount(sticky, {
      props: {
        offset
      }
    });
    expect(wrapper.find<HTMLElement>('.l-sticky').element.style.top).toEqual(
      `${offset}px`
    );
  });

  it('renders props.to correctly', () => {
    const wrapper = shallowMount(sticky, {
      props: {
        to: 'left'
      }
    });
    expect(wrapper.find<HTMLElement>('.l-sticky').element.style.left).toEqual(
      '0px'
    );
  });

  it('renders props.to and props.offset together correctly', () => {
    const offset = 77;
    const wrapper = shallowMount(sticky, {
      props: {
        to: 'bottom',
        offset
      }
    });
    expect(wrapper.find<HTMLElement>('.l-sticky').element.style.bottom).toEqual(
      `${77}px`
    );
  });
});
