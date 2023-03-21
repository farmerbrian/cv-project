import React, { Component } from 'react';

class EducationXp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			school: this.props.school,
			major: '',
			dateFrom: '',
			dateTo: '',
			graduated: '',
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		// this.handleToggle = this.handleToggle.bind(this);
	}
	handleRemove() {
		this.props.removeXp(this.props.id);
	}
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateXp(this.props.id, this.state.school);
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
				<div className="Xp">
					<form className="Xp-edit-form" onSubmit={this.handleUpdate}>
						<input
							type="text"
							value={this.state.school}
							name="school"
							placeholder="School"
							onChange={this.handleChange}
						></input>
						<input
							type="text"
							value={this.state.major}
							name="major"
							placeholder="Major"
							onChange={this.handleChange}
						></input>
						<input
							type="date"
							value={this.state.dateFrom}
							name="dateFrom"
							placeholder="Date attended from"
							onChange={this.handleChange}
						></input>
						<input
							type="date"
							value={this.state.dateTo}
							name="dateTo"
							placeholder="Date attended to"
							onChange={this.handleChange}
						></input>
						<input
							type="text"
							value={this.state.graduated}
							name="graduated"
							placeholder="Graduated?"
							onChange={this.handleChange}
						></input>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Xp">
					<li
						className={
							' EducationXp'
							// this.props.completed ? 'PractXp completed' : 'PractXp'
						}
						// onClick={this.handleToggle}
					>
						{this.props.school}
					</li>
					<li>{this.state.major}</li>
					<li>{this.state.dateFrom}</li>
					<li>{this.state.dateTo}</li>
					<li>{this.state.graduated}</li>

					<div className="eduXp-buttons">
						<button onClick={this.toggleForm}>
							<i className="fas fa-pen" />
						</button>
						<button onClick={this.handleRemove}>
							<i className="fas fa-trash" />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default EducationXp;
