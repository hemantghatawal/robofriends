import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from './Scroll';
import './App.css';
import {robots} from './robots.js'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( users => this.setState({robots: users}));
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		if (!robots.length){
			return <h1 className="tc f1"> Loading </h1>
		}
		else{
			return (
				<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots = {filteredRobots} />
						</ErrorBoundry>
					</ Scroll>
				</div>	
			);
		}
	}
}

export default App;