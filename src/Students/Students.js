import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import NewStudent from './NewStudent';
import CurrentStudents from './CurrentStudents';
import './Students.css';

class Students extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStudents: [],
			apiData: {}
		}
		this.fetchStudents = this.fetchStudents.bind(this);
	}

	fetchStudents() {
		// probably can not make this discover call if apiData exists
		fetch('http://localhost:5000/discover')
			.then(response => response.json())
			.then(apiData => {
				this.setState({
					apiData
				});
				const path = apiData.students.read.path;
				const method = apiData.students.read.method;
				fetch(path, { method})
					.then(response => response.json())
					.then(students => {
						this.setState({
							currentStudents: students
						});
					})
					.catch(error => {
						this.setState({
							error: 'Oops, something went wrong trying to load students, please try again later.'
						})
					});
			})
			.catch(error => {
				this.setState({
					error: 'Oops, something went wrong trying to load discover for students, please try again later.'
				})
			});
	}

	componentDidMount() {
		this.fetchStudents();
	}

	render() {
		return (
			<div className="Students">
				<h1>Students</h1>
				<NewStudent onCreate={ this.fetchStudents } apiData={ this.state.apiData }/>
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
