import "./App.css";
import AddPanel from "./components/AddPanel";
import PostsList from "./components/PostsList";
import Some from "./components/Some";

function App() {
	return (
		<div className="App">
			<PostsList />
			<AddPanel />
			<Some />
		</div>
	);
}

export default App;
