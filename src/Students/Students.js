import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import NewStudent from './NewStudent';
import CurrentStudents from './CurrentStudents';

class Students extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStudents: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:5000/students')
			.then(students => {
				this.setState({
					currentStudents: students
				})
			})
	}

	render() {
		return (
			<div className="Students">
				<NewStudent />
				<hr />
				<CurrentStudents currentStudents={ this.state.currentStudents }/>
			</div>
		);
	}
}

export default Students;
