import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentProfessors extends Component {
	static propTypes = {
		currentProfessors: PropTypes.array
	};
	static defaultProps = {
		currentProfessors: []
	}

	render() {
		if(this.props.currentProfessors.length === 0) {
			return <div>No Current Students</div>
		}
		return (
			<div className="current-students">
				Current List of Professors:
				<ul>
				{
					this.props.currentProfessors.map((professor, index) => (
						<li key={ index }>
							<div><strong>ID:{ professor.id } | Name:{ professor.name }</strong></div>
							<div>{ professor.coursesTaught.map(course => {
										return <div key={ course.code }> { `*${course.title}(${course.code}) is taught in ${course.semester ? 'Spring' : 'Fall'} semestor.` }</div>
									})
								}
							</div>
						</li>
					))
				}
				</ul>
			</div>
		);
	};
}

export default CurrentProfessors;
