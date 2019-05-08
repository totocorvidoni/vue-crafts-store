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

describe('addProduct', () => {
  it('calls the mutation addToCart', () => {
    const mockStore = { cart: [], commit: jest.fn() };
    const product = { id: 1 };
    actions.addProduct(mockStore, product);
    expect(mockStore.commit).toHaveBeenCalledWith('addToCart', product);
  });

  it('calls the mutation incrementItemInCart if item already exists', () => {
    const mockStore = { cart: [{ id: 1, amount: 1 }], commit: jest.fn() };
    actions.addProduct(mockStore, { id: 1 });
    expect(mockStore.commit).toHaveBeenCalledWith('incrementItemInCart', 0);
  });
});

describe('removeProduct', () => {
  it('calls the mutation removeFromCart if item amount is 1', () => {
    const mockStore = { cart: [{ id: 1, amount: 1 }], commit: jest.fn() };
    actions.removeProduct(mockStore, { id: 1 });
    expect(mockStore.commit).toHaveBeenCalledWith('removeFromCart', 0);
  });

  it('calls the mutation decrementItemInCart if item amount is more than 1', () => {
    const mockStore = { cart: [{ id: 1, amount: 2 }], commit: jest.fn() };
    actions.removeProduct(mockStore, { id: 1 });
    expect(mockStore.commit).toHaveBeenCalledWith('decrementItemInCart', 0);
  });
});
