import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { getRecipesFromDatabase } from "./actions/actionRecipe";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

const result = (
	<BrowserRouter>
		<Provider store={store}>
			<Nav />
			<Container>
				<AppRouter />
			</Container>
		</Provider>
	</BrowserRouter>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(getRecipesFromDatabase()).then(() => {
	ReactDOM.render(result, document.getElementById("root"));
});

reportWebVitals();
