import React, { Component } from 'react';
import NewPracticalXpForm from './NewPracticalXpForm';
import PracticalXp from './PracticalXp';
import '../styles/Practical.css';

class Practical extends Component {
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
				return { ...xp, employer: updatedXp };
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
				<PracticalXp
					key={xp.id}
					id={xp.id}
					employer={xp.employer}
					// completed={xp.completed}
					removeXp={this.remove}
					updateXp={this.update}
					toggleXp={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>Practical Experience</h1>
				<h3>List your work experience below</h3>

				<ul>{practXp}</ul>
				<NewPracticalXpForm createXp={this.create} />
			</div>
		);
	}
}

export default Practical;
