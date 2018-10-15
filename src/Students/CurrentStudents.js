import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentStudents extends Component {
	render() {
		return (
			<div className="current-students">
				Current List of Students:
				<ul>
				{
					this.props.students.map(student => (
						<li>{ student }</li>
					))
				}
				</ul>
			</div>
		);
	}
}

CurrentStudents.propTypes = {
	students: PropTypes.array
};

CurrentStudents.defaultProps = {
	students: []
};

export default CurrentStudents;
