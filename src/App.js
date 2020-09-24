import React, { Component } from "react";
import { connect } from 'react-redux'
import CardList from './cardList/cardList'
import SearchBox from './searchBox/searchBox'
import Scroll from './scroll/scroll'
import { setSearchField } from './actions'
// import { robots } from './robots'
import "./App.css";
// import DemonymApp from './demonymapp/DemonymApp'
// import Accordion from './state-drills/Accordion'
// import Messages from "./Messages";
// import Tabs from "./state/Tabs.js";

// const tabsProp = [
//   {
//     name: "First tab",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
//   },
//   {
//     name: "Second tab",
//     content:
//       "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
//   },
//   {
//     name: "Third tab",
//     content:
//       "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
//   }
// ];

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      // searchfield: '' // after setting redux
    }
    // console.log('constructor')
  }

  componentDidMount() {
    // console.log('check')
    // console.log(this.props.store.getState())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {this.setState({ robots: users })})
    // console.log('component')
  }

  // onSearchChange = (event) => { after setting redux
  //   this.setState({ searchfield: event.target.value})
    // console.log(event.target.value)
   
    // console.log(filteredRobots)
  // }

  render() {
    const { robots } = this.state
    const { searchField, onSearchChange} = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    // console.log('render')
    // if (this.state.robots.length === 0) {
      return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll >
          <CardList robots={filteredRobots}/>
          </Scroll>
      </div>
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (App);

