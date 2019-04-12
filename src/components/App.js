import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/Login';

class App extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return(
			<div>
				<Switch>
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		)
	}
}

export default App;