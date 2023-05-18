import "./App.css";
import AddPanel from "./components/AddPanel";
import PostsList from "./components/PostsList";

function App() {
	return (
		<div className="App">
			<PostsList />
			<AddPanel />
		</div>
	);
}

export default App;
