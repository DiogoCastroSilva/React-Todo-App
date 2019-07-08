const initialState = {
    currentItem: {text: '', key: ''},
    todos: [],
    completed: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_CURRENT':
            return {
                ...state,
                currentItem: action.id
            };
        case 'ADD_TASK':
            return {
                currentItem: {text: '', key: ''},
                todos: [...state.todos, action.id],
                ...state.completed
            };
        
        case 'ADD_TO_COMPLETED':
            console.log(action.id);
            
            const newTodo = state.todos.filter(todo => todo.key !== action.id.key);
            const completed = state.completed ? [...state.completed, action.id] : [action.id];
            console.log(completed);
            return {
                currentItem: state.currentItem,
                todos: newTodo,
                completed: completed
            }
        case 'REMOVE_TASK':
                console.log(action.id);
            const newTodos = state.todos.filter(todo => todo.key !== action.id.key);
            return {
                currentItem: state.currentItem,
                todos: newTodos,
                completed: state.completed
            }
        case 'REMOVE_COMPLETED':
                console.log(action.id);
            const complete = state.completed.filter(complete => complete.key !== action.id.key);
            return {
                currentItem: state.currentItem,
                todos: state.todos,
                completed: complete
            }
        case 'ADD_LOCAL_STORAGE':
            console.log(action.id);
         const todos = action.id.todos ? action.id.todos : [];
         const completeds = action.id.completed ? action.id.completed : [];
            return {
                currentItem: {text: '', key: ''},
                todos: [...todos],
                completed: [...completeds]
        }
        default:
            return state;
    }
    
};

export default rootReducer;