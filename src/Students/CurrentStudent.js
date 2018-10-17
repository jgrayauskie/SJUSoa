import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';

class CurrentStudent extends Component {
	static propTypes = {
		student: PropTypes.object
	};

	static defaultProps = {
		student: {}
	};

	constructor(props) {
		super(props);
		this.state = {
			advisor: {}
		}
		this.fetchAdvisor = this.fetchAdvisor.bind(this);
	}

	fetchAdvisor() {
		fetch(this.props.student.advisor.link.href)
			.then(response => response.json())
			.then(advisor => {
				this.setState({
					advisor
				});
			})
			.catch(error => {
				this.setState({
					error: 'Oops, something went wrong trying to load advisor for student, please try again later.'
				})
			});
	}

	componentDidMount() {
		this.fetchAdvisor();
	}

	render() {
		return (
			<li key={ this.props.index }>
				<strong>
					Name: { this.props.student.name }
				</strong>
				| Advisor: { this.state.advisor.name }
			</li>
		);
	}
}

export default CurrentStudent;
