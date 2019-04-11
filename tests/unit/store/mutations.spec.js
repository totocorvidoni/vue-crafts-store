import mutations from '@/store/mutations';

describe('setMainCategories', () => {
  it('sets the state for mainCategory', () => {
    const state = { mainCategories: [] };
    mutations.setMainCategories(state, ['Mock Category']);
    expect(state.mainCategories).toEqual(['Mock Category']);
  });
});
