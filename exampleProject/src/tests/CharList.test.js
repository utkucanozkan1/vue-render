import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import CharList from '../components/CharList.vue';
import { useCharStore } from '../stores/chars'

describe('CharList Component', () => {
  let store;
  let wrapper;
    beforeEach(() => {
      wrapper = mount(CharList, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    store = useCharStore();
  })
      /** DOM TESTS */
     it('should render loading div when loading', async () => {
      store.loading = true;
      //wait for the component update
      await wrapper.vm.$nextTick();
      const loadingDiv = wrapper.find('[data-test="loading-div"]');
      expect(loadingDiv.exists()).toBe(true);
      expect(loadingDiv.text()).toBe('Loading Gryffindor Characters...');
    })

    it('should render error div when fetch call fails or error is populated', async () => {
      store.error = 'error while fetch';
      //wait for the component update
      await wrapper.vm.$nextTick();
      const errorDiv = wrapper.find('[data-test="error-div"');
      expect(errorDiv.exists()).toBe(true);
      expect(errorDiv.text()).toBe('error while fetch');
    })

    it('should render li element for each char', async () => {
      store.chars = [
        { id: 1, name: 'Char 1', image: 'Img 1' },
        { id: 2, name: 'Char 2', image: 'Img 2' }
      ]
      await wrapper.vm.$nextTick();
      const liElements = wrapper.findAll('li')
      expect(liElements).toHaveLength(2)
    })

    it('should render img tag for each char', async () =>{
      store.chars = [
        { id: 1, name: 'Harry 1', image: 'Img 1' },
        { id: 2, name: 'Harry 2', image: 'Img 2' }
      ]
      await wrapper.vm.$nextTick();
      const imgTags = wrapper.findAll('img')
      expect(imgTags).toHaveLength(2);
    })

    it('should apply correct CSS classes to images', async () => {
      store.chars = [{ id: 1, name: 'Harry Potter', image: 'harry.jpg' }]
      await wrapper.vm.$nextTick();
      const img = wrapper.find('.profileImg')
      expect(img.exists()).toBe(true)
      expect(img.classes()).toContain('profileImg')
    })


    //api call should be made once
    it('calls fetchChars on mount', () => {
      expect(store.fetchChars).toHaveBeenCalledOnce()
    })
});
