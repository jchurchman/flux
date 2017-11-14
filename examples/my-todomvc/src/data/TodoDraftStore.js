import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Draft from './Draft';

class TodoDraftStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch(action.type) {
            case TodoActionTypes.ADD_TODO:
                return state.set( new Draft() );
            case TodoActionTypes.UPDATE_DRAFT:
                return state.update(
                    draft => draft.set('text', action.text)
                )
            default:
                return state;
        }
    }
}

export default new TodoDraftStore();