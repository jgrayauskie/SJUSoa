import React, { Component } from 'react';

class NewStudent extends Component {
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
		this.setState({
			students: this.state.students.concat([this.state.newStudent]),
			newStudent: ''
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
