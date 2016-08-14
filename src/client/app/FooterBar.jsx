import React from 'react';

class FooterBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {likesCount : 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike () {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({likesCount: newLikesCount});
	}

	render() {
		return (
			<nav className="navbar navbar-inverse navbar-default navbar-fixed-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-1">
							<button className="btn btn-default like-button" onClick={this.onLike}>Like Me</button>
						</div>
						<div className="col-md-11 likes-line">
							<span className="likes-text">Likes : </span>
							<span className="likes-counter">{this.state.likesCount}</span>
							
						</div>
					</div>
				</div>
			</nav>
		);
	}

}

export default FooterBar;