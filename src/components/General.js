import React, { Component } from 'react';
import NewGeneralXpForm from './NewGeneralXpForm';
import GeneralXp from './GeneralXp';
import '../styles/General.css';

class General extends Component {
	constructor(props) {
		super(props);
		this.state = {
			practXp: [{ name: 'Your Name', id: '1234' }],
		};
		this.create = this.create.bind(this);
		// this.remove = this.remove.bind(this);
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
				return { ...xp, name: updatedXp };
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
				<GeneralXp
					key={xp.id}
					id={xp.id}
					name={xp.name}
					// completed={xp.completed}
					// removeXp={this.remove}
					updateXp={this.update}
					toggleXp={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>General Information</h1>
				<h3>Tell us about yourself</h3>

				<ul>{practXp}</ul>
				{/* <NewGeneralXpForm createXp={this.create} /> */}
			</div>
		);
	}
}

export default General;
