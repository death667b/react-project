import React from 'react';
import BasicCalc from './basicCalc.jsx';

class ContentSection extends React.Component {
	render() {
		return (
			<div className="container" id="main-content">
				<div className="row">
					<BasicCalc />
				</div>
			</div>
		);
	}

}

export default ContentSection;