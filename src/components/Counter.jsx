import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	inc,
	incrementByAmount,
} from "../redux/features/counter.slice";

const Counter = () => {
	// State (Reducer) -> UI = Selector way
	const counterValue = useSelector((state) => state.counter.value);

	// Dispatcher
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(decrement())}>-</button>
			Counter {counterValue}
			<button onClick={() => dispatch(inc())}>+</button>
			<button onClick={() => dispatch(incrementByAmount(10))}>10</button>
		</div>
	);
};

export default Counter;
