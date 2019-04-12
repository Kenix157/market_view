import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

ReactDOM.render((
	<BrowserRouter>
        <Switch>
            <Route path='/' component={App}/>
        </Switch>
    </BrowserRouter>
	),
	document.getElementById('root')
);
