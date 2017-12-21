import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    let {counter,fantasyTeams} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{counter.value}</h1>
         <h1>
            {
              fantasyTeams && fantasyTeams.list && fantasyTeams.list.length && fantasyTeams.list.map(t => <div key={t.id}>{t.name} {t.rank} </div>)
            }
           </h1>
        <button onClick={() => this.props.increaseCounter()} > Increase </button>
        <button onClick={() => this.props.resetCounter()} > Reset </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={() => this.props.loadTournaments({},'tournaments/@me')} > Load Tournaments </button>
      </div>
    );
  }
}

export default App;

