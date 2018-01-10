import React, { Component } from 'react';
class App extends Component {
  componentWillMount() {
    this.props.loadTournaments();
  }
  render() {
    let { fantasyTeams } = this.props;
    let item = fantasyTeams.list;
    const articleElement = item.map(t => <li key={t.id}>
        {t.name}
        {t.budget}
        {t.rank}
        {t.status}
        {t.buyIn}
      </li>);
    return <div className="App">
        <ul>{articleElement}</ul>
      </div>;
  }
}

export default App;
