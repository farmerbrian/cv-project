import React, { Component } from 'react';

class PracticalXp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			employer: this.props.employer,
			position: '',
			dateFrom: '',
			dateTo: '',
			description: '',
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	handleRemove() {
		this.props.removeXp(this.props.id);
	}
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateXp(this.props.id, this.state.employer);
		this.setState({ isEditing: false });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="PracticalXp">
					<form className="Xp-edit-form" onSubmit={this.handleUpdate}>
						<input
							type="text"
							value={this.state.employer}
							name="employer"
							placeholder="Employer"
							onChange={this.handleChange}
						></input>
						<input
							type="text"
							value={this.state.position}
							name="position"
							placeholder="Position"
							onChange={this.handleChange}
						></input>
						<input
							type="number"
							value={this.state.dateFrom}
							name="dateFrom"
							placeholder="Year worked from"
							onChange={this.handleChange}
						></input>
						<input
							type="number"
							value={this.state.dateTo}
							name="dateTo"
							placeholder="Year worked to"
							onChange={this.handleChange}
						></input>
						<input
							type="text"
							value={this.state.description}
							name="description"
							placeholder="Job description"
							onChange={this.handleChange}
						></input>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="PracticalXp">
					<li className={'PractXpList Title'}>
						Employer: {this.props.employer}
					</li>
					<li>Position: {this.state.position}</li>
					<li>
						Years Worked: {this.state.dateFrom}-{this.state.dateTo}
					</li>
					<li>Job Description: {this.state.description}</li>

					<div className="PractXp-buttons">
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

export default PracticalXp;
