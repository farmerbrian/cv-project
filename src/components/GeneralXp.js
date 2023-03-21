import React, { Component } from 'react';

class GeneralXp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			name: this.props.name,
			email: '',
			phone: '',
		};
		// this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		// this.handleToggle = this.handleToggle.bind(this);
	}
	// handleRemove() {
	// 	this.props.removeXp(this.props.id);
	// }
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateXp(this.props.id, this.state.name);
		this.setState({ isEditing: false });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	// handleToggle(evt) {
	// 	this.props.toggleXp(this.props.id);
	// }
	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="GenXp">
					<form className="Xp-edit-form" onSubmit={this.handleUpdate}>
						<input
							type="text"
							value={this.state.name}
							name="name"
							placeholder="Name"
							onChange={this.handleChange}
						></input>
						<input
							type="email"
							value={this.state.email}
							name="email"
							placeholder="Email"
							onChange={this.handleChange}
						></input>
						<input
							type="text"
							value={this.state.phone}
							name="phone"
							placeholder="Phone Number"
							onChange={this.handleChange}
						></input>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="GenXp">
					<li className={'GeneralInfo'}>{this.props.name}</li>
					<li>{this.state.email}</li>
					<li>{this.state.phone}</li>

					<div className="GenXp-buttons">
						<button onClick={this.toggleForm}>
							<i className="fas fa-pen" />
						</button>
						{/* <button onClick={this.handleRemove}>
							<i className="fas fa-trash" />
						</button> */}
					</div>
				</div>
			);
		}
		return result;
	}
}

export default GeneralXp;
