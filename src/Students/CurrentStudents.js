import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentStudents extends Component {
	render() {
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
	}
}

CurrentStudents.propTypes = {
	currentStudents: PropTypes.array
};

CurrentStudents.defaultProps = {
	currentStudents: []
};

export default CurrentStudents;
