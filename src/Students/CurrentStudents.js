import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentStudents extends Component {
	static propTypes = {
		currentStudents: PropTypes.array
	};
	static defaultProps = {
		currentStudents: []
	}

	render() {
		if(this.props.currentStudents.length === 0) {
			return <div>No Current Students</div>
		}
		return (
			<div className="current-students">
				Current List of Students:
				<ul>
				{
					this.props.currentStudents.map((student, index) => (
						<li key={ index }>{ student.name }</li>
					))
				}
				</ul>
			</div>
		);
	};
}

export default CurrentStudents;
