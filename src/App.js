import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import TextInput from "./components/TextInput";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Counter />
				<TextInput />
				<PostList />
			</div>
		</Provider>
	);
}

export default App;
