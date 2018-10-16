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
			studentName: ''
		};
	}
	handleChange(event) {
		this.setState({studentName: event.target.value});
	}
	handleSubmit(event) {
		if(this.state.studentName) {
			fetch('http://localhost:5000/students', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: this.state.studentName
				})
			})
				.then(() => {
					this.props.onCreate();
					this.setState({
						studentName: ''
					});
				})
				.catch(error => {
					this.setState({
						error: 'Oops, something went wrong trying to create a new student, please try again later.'
					})
				});
		}
		event.preventDefault();
	}


	render() {
		if(this.state.error) {
			return <div className="danger">{ this.state.error }</div>
		}
		return (
			<div className="Student">
				<form onSubmit={this.handleSubmit}>
					<label>
						Enter New Student Name:
						<input type="text" value={this.state.studentName} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default NewStudent;
