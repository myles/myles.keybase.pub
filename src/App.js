import React from 'react';

import Bio from './components/bio';
import Proof from './components/proof';

import './App.css';

class App extends React.Component {
  state = {
    id: '',
    basics: {},
    profile: {},
    emails: {},
    picture: {},
    proofs: []
  }

  async getKeybaseBio() {
    let res = await fetch('https://keybase.io/_/api/1.0/user/lookup.json?usernames=myles');
    let json = await res.json();
    let them = json.them[0];

    this.setState({
      id: them.id,
      basics: them.basics,
      profile: them.profile,
      emails: them.emails,
      picture: them.pictures.primary,
      proofs: them.proofs_summary.all
    })
  }

  constructor(props) {
    super(props);

    this.getKeybaseBio();
  }

  render() {
    return (
      <div className="App">
        <Bio key={this.state.id} basics={this.state.basics}
             profile={this.state.profile} emails={this.state.emails}
             picture={this.state.picture}>
          {this.state.proofs.map((proof, index) =>
            <Proof key={index} proof={proof} />)}
        </Bio>
      </div>
    );
  }
}

export default App;
