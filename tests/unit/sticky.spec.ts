import { shallowMount } from '@vue/test-utils';
import { sticky } from '@/components/sticky';

describe('l-sticky', () => {
  it('renders correctly without props', () => {
    const wrapper = shallowMount(sticky);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.l-sticky').exists()).toBeTruthy();
  });
});
