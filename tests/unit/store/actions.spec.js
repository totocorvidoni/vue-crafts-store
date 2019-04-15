import actions from '@/store/actions';
import axios from 'axios';

jest.mock('axios');

describe('setMainCategories', () => {
  xit('loads the state with the payload from the API', async () => {
    axios.get.mockResolvedValue(['Mocked Category']);
    actions.setMainCategories();
    // expect...
  });
});
