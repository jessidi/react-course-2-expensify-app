import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set text filter action object,', () => {
    const action = setTextFilter('haha');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'haha'
    });
});

test('should generate set text filter action object,', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date action object,', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate sort by amount object,', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate set end date action object,', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
