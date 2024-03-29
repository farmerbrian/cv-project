import React, { Component } from 'react';
import { v4 } from 'uuid';
// import './NewPracticalXpForm.css';

class NewPracticalXpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { employer: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createXp({ ...this.state, id: v4() });
		this.setState({ employer: '' });
	}

	render() {
		return (
			<form
				className="NewPracticalXpForm"
				onSubmit={this.handleSubmit}
			>
				<input
					type="text"
					placeholder="Employer Name"
					id="employer"
					name="employer"
					value={this.state.employer}
					onChange={this.handleChange}
				/>
				<button>Add Employer</button>
			</form>
		);
	}
}

export default NewPracticalXpForm;
