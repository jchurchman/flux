import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    updateDraft(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.UPDATE_DRAFT,
            text,
        });
    },
}

export default Actions;