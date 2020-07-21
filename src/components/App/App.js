import React from 'react';
import './App.css';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';

class App extends React.Component {
  handleClick = () => {
    this.props.dispatch(
      {
        type: 'BUTTON_CLICK',
        payload: {},
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
