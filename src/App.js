import React, { Fragment } from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import ProductoNuevo from './components/ProductoNuevo';
import styled from 'styled-components';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

	return (
		<Router>
			<Provider store= {store}>
				<Header/>
				<div>
					<Switch>
						<Route exact path = "/" component= {Productos} />
						<Route exact path = "/productos/nuevo" component= {ProductoNuevo} />
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
