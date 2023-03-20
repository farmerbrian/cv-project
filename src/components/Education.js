import React, { Component } from 'react';
import EducationXp from './EducationXp';
import NewEducationXpForm from './NewEducationXpForm';
import '../styles/Education.css';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			practXp: [],
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newXp) {
		this.setState({
			practXp: [...this.state.practXp, newXp],
		});
	}
	remove(id) {
		this.setState({
			practXp: this.state.practXp.filter((t) => t.id !== id),
		});
	}
	update(id, updatedXp) {
		const updatedXps = this.state.practXp.map((xp) => {
			if (xp.id === id) {
				return { ...xp, school: updatedXp };
			}
			return xp;
		});
		this.setState({ practXp: updatedXps });
	}
	toggleCompletion(id) {
		const updatedXps = this.state.practXp.map((xp) => {
			if (xp.id === id) {
				return { ...xp, completed: !xp.completed };
			}
			return xp;
		});
		this.setState({ practXp: updatedXps });
	}
	render() {
		const practXp = this.state.practXp.map((xp) => {
			return (
				<EducationXp
					key={xp.id}
					id={xp.id}
					school={xp.school}
					// completed={xp.completed}
					removeXp={this.remove}
					updateXp={this.update}
					// toggleXp={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>School Information</h1>
				<h3>List your school experience below</h3>

				<ul>{practXp}</ul>
				<NewEducationXpForm createXp={this.create} />
			</div>
		);
	}
}

export default Education;
