import vuex from 'vuex';
import store from '@/store/store';
import axios from 'axios';

// jest.mock('axios');

it('checks if store was imported correctly', () => {
  expect(store).toBeInstanceOf(vuex.Store);
});

describe('setMainCategories action', () => {
  it('loads the state with the payload from the API', async () => {
    // axios.get.mockResolvedValue(['Mocked Category']);
    await store.dispatch('setMainCategories');
    expect(store.state.mainCategories).toEqual(['Mocked Category']);
  });
});
