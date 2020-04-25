import reducer, { increment, decrement, incrementByAmount } from './counterSlice';

test('initialState', () => {
	expect(reducer(undefined, {})).toEqual({ value: 0 });
});

test('increment', () => {
	expect(reducer(undefined, increment)).toEqual({ value: 1 });
});

test('decrement', () => {
	expect(reducer(undefined, decrement)).toEqual({ value: -1 });
});

test('incrementByAmount', () => {
	expect(reducer(undefined, incrementByAmount(100))).toEqual({ value: 100 });
});
