import React, { Component } from 'react';
import GeneralXp from './GeneralXp';
import '../styles/General.css';

class General extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genXp: [{ name: 'Your Name', id: '1234' }],
		};
		this.create = this.create.bind(this);

		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newXp) {
		this.setState({
			genXp: [...this.state.genXp, newXp],
		});
	}
	remove(id) {
		this.setState({
			genXp: this.state.genXp.filter((t) => t.id !== id),
		});
	}
	update(id, updatedXp) {
		const updatedXps = this.state.genXp.map((xp) => {
			if (xp.id === id) {
				return { ...xp, name: updatedXp };
			}
			return xp;
		});
		this.setState({ genXp: updatedXps });
	}
	toggleCompletion(id) {
		const updatedXps = this.state.genXp.map((xp) => {
			if (xp.id === id) {
				return { ...xp, completed: !xp.completed };
			}
			return xp;
		});
		this.setState({ genXp: updatedXps });
	}
	render() {
		const genXp = this.state.genXp.map((xp) => {
			return (
				<GeneralXp
					key={xp.id}
					id={xp.id}
					name={xp.name}
					updateXp={this.update}
					toggleXp={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="GeneralContainer">
				<h2>General Information</h2>
				<h3>Tell us about yourself</h3>

				<ul>{genXp}</ul>
			</div>
		);
	}
}

export default General;
