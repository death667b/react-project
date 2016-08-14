import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
	render () {
		return (
			<div>
				<p> Hello React!</p>
				<hr />
				<AwesomeComponent />
			</div>


		);
	}
}

render(<App/>, document.getElementById('app'));