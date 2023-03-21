import React, { Component } from 'react';
import EducationXp from './EducationXp';
import NewEducationXpForm from './NewEducationXpForm';
import '../styles/Education.css';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eduXp: [],
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		// this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newXp) {
		this.setState({
			eduXp: [...this.state.eduXp, newXp],
		});
	}
	remove(id) {
		this.setState({
			eduXp: this.state.eduXp.filter((t) => t.id !== id),
		});
	}
	update(id, updatedXp) {
		const updatedXps = this.state.eduXp.map((xp) => {
			if (xp.id === id) {
				return { ...xp, school: updatedXp };
			}
			return xp;
		});
		this.setState({ eduXp: updatedXps });
	}
	toggleCompletion(id) {
		const updatedXps = this.state.eduXp.map((xp) => {
			if (xp.id === id) {
				return { ...xp, completed: !xp.completed };
			}
			return xp;
		});
		this.setState({ eduXp: updatedXps });
	}
	render() {
		const eduXp = this.state.eduXp.map((xp) => {
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
			<div className="EducationalContainer">
				<h1>School Information</h1>
				<h3>List your school experience below</h3>

				<ul>{eduXp}</ul>
				<NewEducationXpForm createXp={this.create} />
			</div>
		);
	}
}

export default Education;
