import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

require("../css/style.css");

class App extends React.Component {
	render () {
		return (
			<div>
				<h1 className="text-center">Will this be a working Calculator?</h1>
				<hr />
				<AwesomeComponent />
			</div>


		);
	}
}

render(<App/>, document.getElementById('app'));