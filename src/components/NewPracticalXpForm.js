import React, { Component } from 'react';
import { v4 } from 'uuid';
// import './NewPracticalXpForm.css';

class NewPracticalXpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
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
		this.props.createTodo({ ...this.state, id: v4() });
		this.setState({ task: '' });
	}

	render() {
		return (
			<form
				className="NewPracticalXpForm"
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="task">New Work Experience</label>
				<input
					type="text"
					placeholder="New Work Experience"
					id="task"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add Work Experience</button>
			</form>
		);
	}
}

export default NewPracticalXpForm;
