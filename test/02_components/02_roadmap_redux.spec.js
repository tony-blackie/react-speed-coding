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
    it('should add first feature of Component category', () => {
        store.dispatch(actions.addFeature('New Component Feature', actions.Categories.COMPONENT));

        expect(store.getState().features.length).to.equal(1);
        expect(store.getState().features[0].category).to.equal(actions.Categories.COMPONENT)
    });
    it('should initialize first feature with default state', () => {
        expect(store.getState().features[0].likes).to.equal(0);
    });
    it('should increment likes count for first feature', () => {
        store.dispatch(actions.likeFeature(0));
        store.dispatch(actions.likeFeature(0));
        expect(store.getState().features[0].likes).to.equal(2);
    });
    it('should set a new categoryFilter', () => {
        expect(store.getState().categoryFilter).to.equal(actions.CategoryFilters.SHOW_ALL);
        store.dispatch(actions.setCategoryFilter(actions.CategoryFilters.SHOW_COMPONENTS));
        expect(store.getState().categoryFilter).to.equal(actions.CategoryFilters.SHOW_COMPONENTS);
    });
    it('should add second feature of CHAPTER category', () => {
        store.dispatch(
            actions.addFeature('Second Chapter Feature', actions.Categories.CHAPTER)
        );
        expect(store.getState().features.length).to.equal(2);
        expect(store.getState().features[1].category).to.equal(actions.Categories.CHAPTER);

    });
    it('should add third feature of APP category', () => {
        
    });
    it('should set new search text');
});