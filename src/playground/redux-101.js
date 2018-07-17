import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});


const decrementCount = ( { decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const reset = () => ({
  type: 'RESET',
});

const set = ({ count }) => ({
  type: 'SET',
  count
});

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      };
    case 'SET': return {
      count: action.count
    }
    case 'RESET': return {
      count: 0
    }
    default: return state;
  }
};
const store = createStore(countReducer);



console.log(store.getState());

// Actions

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(incrementCount());
// I'd like to reset the count to zero
store.dispatch(decrementCount(3));
store.dispatch(reset());

store.dispatch(set({count: -12}));

