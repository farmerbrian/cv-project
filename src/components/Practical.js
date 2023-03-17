import React, { Component } from 'react';
import NewPracticalXpForm from './NewPracticalXpForm';
import PracticalXp from './PracticalXp';
import '../styles/Practical.css';

class Practical extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newTodo) {
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	}
	remove(id) {
		this.setState({
			todos: this.state.todos.filter((t) => t.id !== id),
		});
	}
	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, employer: updatedTask };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	toggleCompletion(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<PracticalXp
					key={todo.id}
					id={todo.id}
					employer={todo.employer}
					completed={todo.completed}
					removeTodo={this.remove}
					updateTodo={this.update}
					toggleTodo={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>Practical Experience</h1>
				<h3>List your work experience below</h3>

				<ul>{todos}</ul>
				<NewPracticalXpForm createTodo={this.create} />
			</div>
		);
	}
}

export default Practical;
