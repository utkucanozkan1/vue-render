import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import CharList from '../components/CharList.vue';
import { useCharStore } from '../stores/chars'

describe('Character Store', () => {
  let store;
  let wrapper;
  global.fetch = vi.fn();

    beforeEach(() => {
      wrapper = mount(CharList, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    store = useCharStore();
  })

  it('has initial default state', () => {
    expect(store.chars).toEqual([])
    expect(store.loading).toBe(false)
    expect(store.error).toBe(null)
  })
});