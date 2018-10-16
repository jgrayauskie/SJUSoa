import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fetch from 'isomorphic-fetch';

class NewStudent extends Component {
	static propTypes = {
		onCreate: PropTypes.func
	}
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			students: [],
			newStudent: ''
		};
	}
	handleChange(event) {
		this.setState({newStudent: event.target.value});
	}
	handleSubmit(event) {
		fetch('http://localhost:5000/students', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.newStudent
			})
		})
			.then(() => {
				this.props.onCreate();
				this.setState({
					newStudent: ''
				});
			});


		event.preventDefault();
	}

	render() {
		return (
			<div className="Student">
				<form onSubmit={this.handleSubmit}>
					<label>
						Enter New Student Name:
						<input type="text" value={this.state.newStudent} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default NewStudent;
