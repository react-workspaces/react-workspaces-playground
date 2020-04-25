import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Counter } from './Counter';

test('increment', () => {
	const { getByText } = render(
		<Provider store={store}>
			<Counter />
		</Provider>,
	);
	const increment = getByText(/\+/i);
	expect(increment).toBeInTheDocument();
	fireEvent.click(increment);
});

test('decrement', () => {
	const { getByText } = render(
		<Provider store={store}>
			<Counter />
		</Provider>,
	);
	const increment = getByText(/-/i);
	expect(increment).toBeInTheDocument();
	fireEvent.click(increment);
});

test('Add Amount', () => {
	const { getByText } = render(
		<Provider store={store}>
			<Counter />
		</Provider>,
	);
	const add = getByText(/Add Amount/i);
	expect(add).toBeInTheDocument();
	fireEvent.click(add);
});

test('Add Async', () => {
	const { getByText } = render(
		<Provider store={store}>
			<Counter />
		</Provider>,
	);
	const add = getByText(/Add Async/i);
	expect(add).toBeInTheDocument();
	fireEvent.click(add);
});

test('Set increment amount', () => {
	const { getByLabelText } = render(
		<Provider store={store}>
			<Counter />
		</Provider>,
	);
	const add = getByLabelText(/Set increment amount/i);
	expect(add).toBeInTheDocument();
	fireEvent.change(add, { target: { value: 'a' } });
});
