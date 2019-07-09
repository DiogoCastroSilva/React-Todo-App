import { CHANGE_CURRENT } from "../actions/action-types";

const initialState = {
    currentItem: {text: '', key: ''},
    todos: [],
    completed: [],
    error: false
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENT:
            return {
                ...state,
                currentItem: action.id,
                error: false
            };
        case 'ADD_TASK':
            return {
                currentItem: {text: '', key: ''},
                todos: [...state.todos, action.id],
                completed: [...state.completed],
                error: false
            };
        
        case 'ADD_TO_COMPLETED':      
            const newTodo = state.todos.filter(todo => todo.key !== action.id.key);
            const completed = state.completed ? [...state.completed, action.id] : [action.id];

            return {
                currentItem: state.currentItem,
                todos: newTodo,
                completed: completed,
                error: false
            }
        case 'REMOVE_TASK':
            const newTodos = state.todos.filter(todo => todo.key !== action.id.key);
            
            return {
                currentItem: state.currentItem,
                todos: newTodos,
                completed: state.completed,
                error: false
            }
        case 'REMOVE_COMPLETED':
            const complete = state.completed.filter(complete => complete.key !== action.id.key);

            return {
                currentItem: state.currentItem,
                todos: state.todos,
                completed: complete,
                error: false
            }
        case 'ADD_LOCAL_STORAGE':
         const todos = action.id.todos ? action.id.todos : [];
         const completeds = action.id.completed ? action.id.completed : [];

            return {
                currentItem: {text: '', key: ''},
                todos: [...todos],
                completed: [...completeds],
                error: false
        }
        case 'FOUND_BAD_WORD':

            return {
                currentItem: {text: `Can't use that word`, key: null},
                todos: state.todos,
                completed: state.completed,
                error: true
        }
        default:
            return state;
    }
    
};

export default rootReducer;