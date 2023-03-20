import React, { Component } from 'react';
import { v4 } from 'uuid';
// import './NewPracticalXpForm.css';

class NewEducationXpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { school: '' };
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
		this.setState({ school: '' });
	}

	render() {
		return (
			<form
				className="NewEducationXpForm"
				onSubmit={this.handleSubmit}
			>
				{/* <label htmlFor="employer">New Work Experience</label> */}
				<input
					type="text"
					placeholder="School Name"
					id="school"
					name="school"
					value={this.state.school}
					onChange={this.handleChange}
				/>
				<button>Add School</button>
			</form>
		);
	}
}

export default NewEducationXpForm;
