import actions from '@/store/actions';
import axios from 'axios';

jest.mock('axios');

describe('addToCart', () => {
  const mockStore = { cart: [], commit: jest.fn() };
  const product = { id: 1 };
  actions.addToCart(mockStore, product);

  it('calls the mutation addToCart', () => {
    expect(mockStore.commit).toHaveBeenCalledWith('addToCart', product);
  });

  it('Add the amount property to product', () => {
    expect(product).toHaveProperty('amount');
  });
});

describe('removeFromCart', () => {
  it('calls the RemoveFromCart mutations with the product index', () => {
    const mockStore = {
      state: { cart: [{ id: 1, amount: 1 }] },
      commit: jest.fn()
    };
    actions.removeFromCart(mockStore, 1);
    expect(mockStore.commit).toHaveBeenCalledWith('removeFromCart', 0);
  });
});

describe('incrementItemInCart', () => {
  it('calls the mutation incrementItemInCart with the product index', () => {
    const mockStore = {
      state: { cart: [{ id: 1, amount: 2 }] },
      commit: jest.fn()
    };
    actions.incrementItemInCart(mockStore, 1);
    expect(mockStore.commit).toHaveBeenCalledWith('incrementItemInCart', 0);
  });
});

describe('decrementItemInCart', () => {
  it('calls the mutation decrementItemInCart with the product index', () => {
    const mockStore = {
      state: { cart: [{ id: 1, amount: 2 }] },
      commit: jest.fn()
    };
    actions.decrementItemInCart(mockStore, 1);
    expect(mockStore.commit).toHaveBeenCalledWith('decrementItemInCart', 0);
  });
});
