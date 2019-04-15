import vuex from 'vuex';
import store from '@/store/store';

jest.mock('axios');

it('checks if store was imported correctly', () => {
  expect(store).toBeInstanceOf(vuex.Store);
});
