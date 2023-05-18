import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// import { createStore, bindActionCreators } from "redux";
// import * as actions from "./redux/actions";
// import reducer from "./redux/reducer";

// const incBtn = document.querySelector("#inc");
// const decBtn = document.querySelector("#dec");
// const rndBtn = document.querySelector("#rnd");
// const out = document.querySelector("#out");

// const { dispatch, subscribe, getState } = createStore(reducer);

// const update = () => {
// 	out.innerText = getState().counter;
// };

// subscribe(update);

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// incBtn.addEventListener("click", inc);

// decBtn.addEventListener("click", dec);

// rndBtn.addEventListener("click", rnd);
