import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import CurrentProfessors from './CurrentProfessors';

class Professors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentProfessors: []
		}
		this.fetchProfessors = this.fetchProfessors.bind(this);
	}

	fetchProfessors() {
		fetch('http://localhost:8001/professors')
			.then(response => response.json())
			.then(professors => {
				this.setState({
					currentProfessors: professors
				});
			})
			.catch(error => {
				this.setState({
					error: 'Oops, something went wrong trying to load professors, please try again later.'
				})
			});
	}

	componentDidMount() {
		this.fetchProfessors();
	}

	render() {
		return (
			<div className="Professors">
				<h1>Professors</h1>
				{
					this.state.error
						? <span className="danger">{ this.state.error } </span>
						: <CurrentProfessors currentProfessors={ this.state.currentProfessors }/>
				}
			</div>
		);
	}
}

export default Professors;
