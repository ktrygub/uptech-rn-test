import uuidv4 from 'uuid/v4';

/*
  Action types
*/
const TOGGLE_TODO = 'uptech/todos/TOGGLE_TODO';
const ADD_TODO = 'uptech/todos/ADD_TODO';
const REMOVE_TODO = 'uptech/todos/REMOVE_TODO';

/*
  Initial state
*/

const initialState = [
  {
    id: uuidv4(),
    isCompleted: false,
    text: 'Test todos from initial state',
  },
  {
    id: uuidv4(),
    isCompleted: true,
    text: 'Have fun',
  },
  {
    id: uuidv4(),
    isCompleted: false,
    text: 'empty task',
  },
];

/*
  Reducer
*/

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { text: action.text, id: uuidv4(), isCompleted: false };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return { ...state, isCompleted: !state.isCompleted };
    default:
      return state;
  }
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    case REMOVE_TODO:
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default todos;

/*
  Action creators
*/

export const addTodo = text => ({
  type: ADD_TODO,
  text: text || 'empty task',
});

export const toggleTodo = id => ({ type: TOGGLE_TODO, id });

export const removeTodo = id => ({ type: REMOVE_TODO, id });

/*
  Selectors
*/
export const getAllTodos = state => state.todos;

export const getUncompletedTodosCount = state =>
  state.todos.reduce((acc, todo) => acc + (todo.isCompleted ? 0 : 1), 0);
