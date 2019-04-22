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
