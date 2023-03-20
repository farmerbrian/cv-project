import React, { Component } from 'react';
import { v4 } from 'uuid';
// import './NewPracticalXpForm.css';

class NewGeneralXpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
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
		this.setState({ name: '' });
	}

	render() {
		return (
			<div></div>
			// <form className="NewGeneralXpForm" onSubmit={this.handleSubmit}>
			// 		<input
			// 		type="text"
			// 		placeholder="Your Name"
			// 		id="name"
			// 		name="name"
			// 		value={this.state.name}
			// 		onChange={this.handleChange}
			// 	/>
			// 	<input
			// 		type="email"
			// 		value={this.state.email}
			// 		name="email"
			// 		placeholder="Email"
			// 		onChange={this.handleChange}
			// 	></input>
			// 	<input
			// 		type="text"
			// 		value={this.state.phone}
			// 		name="phone"
			// 		placeholder="Phone Number"
			// 		onChange={this.handleChange}
			// 	></input>
			// 	<button>Add</button>
			// </form>
		);
	}
}

export default NewGeneralXpForm;
