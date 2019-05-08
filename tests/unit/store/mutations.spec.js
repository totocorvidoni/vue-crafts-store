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
  let state;

  beforeEach(() => {
    state = { cart: [{ id: 1 }, { id: 2 }] };
  });

  it('removes the selected item from cart', () => {
    mutations.removeFromCart(state, { id: 1 });
    expect(state.cart).toEqual([{ id: 2 }]);
  });
  it('does not remove anything if the item was not found', () => {
    mutations.removeFromCart(state, { id: 3 });
    expect(state.cart).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
