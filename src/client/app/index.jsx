import React from 'react';
import {render} from 'react-dom';
import FooterBar from './FooterBar.jsx';
import AppHeader from './header.jsx';
import ContentSection from './ContentSection.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

require("../css/style.css");

class App extends React.Component {
	render () {
		return (
			<div>
				<AppHeader />
				<ContentSection />
				<FooterBar />
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));