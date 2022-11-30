import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux"
import AppRouter from "./routers/AppRouter";
import Nav from "./components/Nav";
import Container from "react-bootstrap/Container"
import configureStore from "./store.jsx/configureStore";
import { addRecipe } from "./actions/actionRecipe";

const store = configureStore();

// Blog App

// Dispatch Start
store.subscribe(() => {
	// console.log(store.getState());
});
// store.dispatch(addRecipe({ title: "Hamburger", desc: "This is the recipe of a hamburger...", img: "data:image/jpeg;base64,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" }));
// store.dispatch(addRecipe({ title: "Plov", desc: "This is the recipe of plov...", img: "https://www.exploreazerbaijan.com/medias/article/medium/22/dc905114365b229a7b36a02714596286.jpg" }));

// Dispatch End
 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
		<Nav />
		<Container>
			<AppRouter />
		</Container>
		</Provider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
