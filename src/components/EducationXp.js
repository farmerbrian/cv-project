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
			// graduated: '',
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
		this.props.updateXp(this.props.id, this.state.school);
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
							type="number"
							value={this.state.dateFrom}
							name="dateFrom"
							placeholder="Year attended from"
							onChange={this.handleChange}
						></input>
						<input
							type="number"
							value={this.state.dateTo}
							name="dateTo"
							placeholder="Year attended to"
							onChange={this.handleChange}
						></input>
						{/* <input
							type="text"
							value={this.state.graduated}
							name="graduated"
							placeholder="Graduated?"
							onChange={this.handleChange}
						></input> */}
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Xp">
					<li className={' EducationXp Title'}>
						School: {this.props.school}
					</li>
					<li>Major: {this.state.major}</li>
					<li>
						Attended: {this.state.dateFrom}-{this.state.dateTo}
					</li>

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
