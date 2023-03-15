import React, { Component } from 'react';
import General from './components/General.js';
import Education from './components/Education.js';
import Practical from './components/Practical.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Here's a CV Project</h1>
				<General />
				<Education />
				<Practical />
			</div>
		);
	}
}

export default App;
