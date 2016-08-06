import reducer, { defaultState } from 'redux/modules/header';
import deepFreeze from 'deep-freeze';

describe('(Redux) header', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
