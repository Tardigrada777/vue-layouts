import { shallowMount } from '@vue/test-utils';
import { fixed } from '@/components/fixed';

describe('l-fixed', () => {
  it('renders correctly without props', () => {
    const wrapper = shallowMount(fixed);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes().includes('l-fixed'));
  });

  it('renders correctly with props', () => {
    const wrapper = shallowMount(fixed, {
      props: {
        top: 15,
        left: 30
      }
    });
    expect(wrapper.find<HTMLElement>('.l-fixed').element.style.top).toEqual(
      '15px'
    );
    expect(wrapper.find<HTMLElement>('.l-fixed').element.style.left).toEqual(
      '30px'
    );
  });

  it('renders correctly passed styles', () => {
    const wrapper = shallowMount(fixed, {
      attrs: {
        style: {
          overflow: 'hidden'
        }
      }
    });
    expect(
      wrapper.find<HTMLElement>('.l-fixed').element.style.overflow
    ).toEqual('hidden');
  });
});
