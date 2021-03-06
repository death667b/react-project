import React from 'react';
import {render} from 'react-dom';

class BasicCalc extends React.Component {

	constructor(props) {
		super(props);
		this.state = {displayCalcValue : "2"};
		this.onLike = this.onLike.bind(this);
	}

	onLike (val) {
		let newdisplayCalcValue = this.state.displayCalcValue.concat(val);
		this.setState({displayCalcValue: newdisplayCalcValue});
	}


	render() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-primary panel-default">
					<div className="panel-heading">
						<h3 className="panel-title text-center">Basic Calculator</h3>
					</div>
					<div className="panel-body">
						<form>
							<div className="form-group">
								<input type="text" className="form-control" id="calcValue" onChange={this.onLike} value={this.state.displayCalcValue} />
							</div>
							<div className="form-group">
								<div className="btn-toolbar" role="toolbar" aria-label="Number Group"> 
									<div className="btn-group btn-group-lg" role="group" aria-label="First line"> 
										<button type="button" className="btn btn-default" onClick={this.onLike}>1</button> 
										<button type="button" className="btn btn-default">2</button> 
										<button type="button" className="btn btn-default">3</button> 
									</div> 
									<div className="btn-group btn-group-lg pull-right" role="group" aria-label="First line"> 
										<button type="button" className="btn btn-default">CE</button>
										<button type="button" className="btn btn-default">C</button>
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="btn-toolbar" role="toolbar" aria-label="Number Group"> 
									<div className="btn-group btn-group-lg" role="group" aria-label="First line"> 
										<button type="button" className="btn btn-default">4</button> 
										<button type="button" className="btn btn-default">5</button> 
										<button type="button" className="btn btn-default">6</button> 
									</div>
									<div className="btn-group btn-group-lg pull-right" role="group" aria-label="First line"> 
										<button type="button" className="btn btn-default">+</button>
										<button type="button" className="btn btn-default">-</button>
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="btn-toolbar" role="toolbar" aria-label="Number Group"> 
									<div className="btn-group btn-group-lg" role="group" aria-label="First line"> 
										<button type="button" className="btn btn-default">7</button> 
										<button type="button" className="btn btn-default">8</button> 
										<button type="button" className="btn btn-default">9</button> 
									</div>
									<div className="btn-group btn-group-lg pull-right" role="group" aria-label="First line"> 
										<button type="button" className="btn btn-default">*</button>
										<button type="button" className="btn btn-default">/</button>
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="btn-toolbar" role="toolbar" aria-label="Number Group"> 
									<div className="btn-group btn-group-lg" role="group" aria-label="First line"> 
										
										<button type="button" className="btn btn-default">0</button> 
										
									</div>
									<div className="btn-group btn-group-lg pull-right" role="group" aria-label="First line"> 
										
										<button type="button" className="btn btn-default">=</button>
									</div>
								</div>
							</div>
						</form>	
					</div>		
				</div>
			</div>
		);
	}

}

export default BasicCalc;


