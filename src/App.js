import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    if(this.list.className === "responsive") {
      this.list.className = "";
    } else {
      this.list.className = "responsive";
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul ref={(list) => { this.list = list }}>
            <li><b>Work and travel as Team</b></li>
            <li><a href="">Build a Team</a></li>
            <li><a href="">Provide a Team</a></li>
            <li><a href="">Recruit a Team</a></li>
            <li className="burger"><a href="javascript:void(0);" onClick={this.toggleMenu}>&#9776;</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
