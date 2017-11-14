import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';

function getStores() {
    return [
        TodoStore,
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.onToggleTodo,
    };
}

export default Container.createFunctional(AppView, getStores, getState);