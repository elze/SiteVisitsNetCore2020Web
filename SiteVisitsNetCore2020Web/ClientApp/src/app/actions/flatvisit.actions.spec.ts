import * as fromFlatvisit from './flatvisit.actions';

describe('loadFlatvisits', () => {
  it('should return an action', () => {
    expect(fromFlatvisit.loadFlatvisits().type).toBe('[Flatvisit] Load Flatvisits');
  });
});
