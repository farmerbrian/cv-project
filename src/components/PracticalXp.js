import React, { Component } from 'react';

class PracticalXp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task,
			position: '',
			dateFrom: '',
			dateTo: '',
			description: '',
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleRemove() {
		this.props.removeTodo(this.props.id);
	}
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleToggle(evt) {
		this.props.toggleTodo(this.props.id);
	}
	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="Todo">
					<form
						className="Todo-edit-form"
						onSubmit={this.handleUpdate}
					>
						<input
							type="text"
							value={this.state.task}
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
							type="date"
							value={this.state.dateFrom}
							name="dateFrom"
							placeholder="Date worked from"
							onChange={this.handleChange}
						></input>
						<input
							type="date"
							value={this.state.dateTo}
							name="dateTo"
							placeholder="Date worked to"
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
				<div className="Todo">
					<li
						className={
							this.props.completed
								? 'Todo-task completed'
								: 'Todo-task'
						}
						onClick={this.handleToggle}
					>
						{this.props.task}
					</li>
					<li>{this.state.position}</li>
					<li>{this.state.dateFrom}</li>
					<li>{this.state.dateTo}</li>
					<li>{this.state.description}</li>

					<div className="Todo-buttons">
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