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
            <li><a href="">Build</a></li>
            <li><a href="">Provide</a></li>
            <li><a href="">Recruit</a></li>
            <li className="burger"><a href="" onClick={this.toggleMenu}>&#9776;</a></li>
          </ul>
        </nav>
        <iframe title="survey" src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTvSIxcNYNf-Tngy-sLYeIqeHaaz8y-OVhBjMOWJ0qWOc8_w/viewform?embedded=true" width="100%" height="1024" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
      </div>
    );
  }
}

export default App;
