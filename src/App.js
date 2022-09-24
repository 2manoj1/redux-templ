import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Counter />
				<TextInput />
			</div>
		</Provider>
	);
}

export default App;
