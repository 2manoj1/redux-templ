import React from "react";
import { useSelector } from "react-redux";

const TextInput = () => {
	const textVal = useSelector((state) => state.textMan.text);
	return <div>{textVal}</div>;
};

export default TextInput;
