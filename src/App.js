import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import ProductoNuevo from './components/ProductoNuevo';
import EditarProducto from './components/EditarProducto';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

//!Redux
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
						<Route exact path = "/productos/editar/:id" component= {EditarProducto} />
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
