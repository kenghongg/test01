import React, { Component } from 'react';


// import { NavBar } from './components/nav-bar/nav-bar.component';
// import { CardList } from './components/card-list/card-list.component';
// import { SearchBox } from './components/search-box/search-box.component';

// import './components/news-ticker.styles.scss';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      monsters: []
      // searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    fetch('http://hokenghong.com/data.json')
    .then(response => response.json())
    .then(font =>  console.log(font))
    .then(font => this.setState({ monsters: font }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    // const filteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <div className="App">
        <h1>YSQ Test</h1>
        
      </div>
    )
  }
}

export default App;