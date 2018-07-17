import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 400, createdAt: -1000 }));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));


//store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'poifjsdlfkj',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500, //545.00
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

