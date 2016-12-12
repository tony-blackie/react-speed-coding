import { describe, it } from 'mocha';
import { expect } from 'chai';
import store from '../../app/store/roadmap';
import * as actions from '../../app/actions/roadmap';

describe('Roadmap Redux Spec', () => {
    it('should get initial state for store', () => {
        expect(store.getState().features.length).to.equal(0);
        expect(store.getState().categoryFilter).to.equal(actions.CategoryFilters.SHOW_ALL);
        expect(store.getState().searchText).to.equal('');
    });
    it('should add first feature of Component category');
    it('should initialize first feature with default state');
    it('should increment likes count for first feature');
    it('should set a new categoryFilter');
    it('should add second feature of CHAPTER category');
    it('should add third feature of APP category');
    it('should set new search text');
});