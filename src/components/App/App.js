import React from 'react';
import './App.css';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';

class App extends React.Component {
  handleClick = () => {
    this.props.dispatch(
      {
        payload: {},
        type: 'ADD_CREATURE_TO_LIST',
      }
    );
  }

  render() {
    // toggle things
    return (
      <AppLayout>
        {/* ADDITIONAL CONTENT */}
        BODY CONTENT
        <button onClick={this.handleClick}>CLICK ME!!!</button>
      </AppLayout>
    );
  }
}

export default connect()(App);
