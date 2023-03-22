import React, { Component } from 'react';
import General from './components/General.js';
import Education from './components/Education.js';
import Practical from './components/Practical.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Resume-Container">
					<h1>Resume Builder</h1>
					<General />
					<Education />
					<Practical />
				</div>
			</div>
		);
	}
}

export default App;
