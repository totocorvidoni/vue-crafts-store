import mutations from '@/store/mutations';

describe('setAllCategories', () => {
  it('sets the state for allCategories', () => {
    const state = { mainCategories: [] };
    mutations.setAllCategories(state, ['Mock Category']);
    expect(state.allCategories).toEqual(['Mock Category']);
  });
});

describe('setActiveMenuCategory', () => {
  it('sets the state for activeMenuCategory', () => {
    const state = { activeMenuCategory: null };
    mutations.setActiveMenuCategory(state, 30);
    expect(state.activeMenuCategory).toEqual(30);
  });
});

describe('addToCart', () => {
  it('adds the provided product to the cart', () => {
    const state = { cart: [] };
    mutations.addToCart(state, { a: 'a' });
    expect(state.cart).toEqual([{ a: 'a' }]);
  });
});

describe('removeFromCart', () => {
  it('removes the selected item from cart', () => {
    const state = { cart: [{ id: 1 }, { id: 2 }] };
    mutations.removeFromCart(state, 0);
    expect(state.cart).toEqual([{ id: 2 }]);
  });
});

describe('incrementItemInCart', () => {
  it('incrases the amount of the desired item by 1', () => {
    const state = { cart: [{ id: 1, amount: 1 }] };
    mutations.incrementItemInCart(state, 0);
    expect(state.cart[0].amount).toEqual(2);
  });
});

describe('decrementItemInCart', () => {
  it('decreases the amount of the desired item by 1', () => {
    const state = { cart: [{ id: 1, amount: 2 }] };
    mutations.decrementItemInCart(state, 0);
    expect(state.cart[0].amount).toEqual(1);
  });
});
