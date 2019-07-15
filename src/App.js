import React from 'react';
import { Component } from 'react';
import './App.css';
import Landing from './pages/landing';



class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="menuBrand">OpenClimate</h1>   
				<Landing/>
			</div>
		);
	}
}

export default App;