import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import NewStudent from './NewStudent';
import CurrentStudents from './CurrentStudents';
import './Students.css';

class Students extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStudents: []
		}
		this.fetchStudents = this.fetchStudents.bind(this);
	}

	fetchStudents() {
		fetch('http://localhost:5000/students')
			.then(response => response.json())
			.then(students => {
				this.setState({
					currentStudents: students
				});
			})
			.catch(error => {
				this.setState({
					error: 'Something Went Wrong, Try reloading.'
				})
			});
	}

	componentDidMount() {
		this.fetchStudents();
	}

	render() {
		return (
			<div className="Students">
				<NewStudent onCreate={ this.fetchStudents } />
				<hr />
				{
					this.state.error
						? <span className="danger">{ this.state.error } </span>
						: <CurrentStudents currentStudents={ this.state.currentStudents }/>
				}
			</div>
		);
	}
}

export default Students;
