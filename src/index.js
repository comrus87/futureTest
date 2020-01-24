import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {Provider} from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
		<Provider store={store}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</Provider>, document.getElementById('root'));

serviceWorker.unregister();
