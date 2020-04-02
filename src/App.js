import React from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
//import { robots } from './robots'
import Scroll from './Scroll'

class App extends React.Component {
  constructor() {
		super()
    this.state = {
      robots:[],
      searchfield: ''
    }
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
			if (res.status !== 200 ){
				console.log('error')
				return;
			}

			res.json().then((data) => {
				this.setState({robots: data})
			})
		})
	}
	
	onSearchChange = (event) => {
			this.setState({searchfield: event.target.value })
	}

  render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

    return (
      <div className='tc'>
        <h1>Friends</h1>
				<SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>

      </div>
    )
  }
}

export default App
