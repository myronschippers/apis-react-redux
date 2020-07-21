import React from 'react';
import './App.css';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';
import CreatureList from '../CreatureList/CreatureList';

class App extends React.Component {
  state = {
    enteredCreature: '',
  }

  handleClick = () => {
    this.props.dispatch(
      { //action
        payload: { creature: this.state.enteredCreature},
        type: 'ADD_CREATURE_TO_LIST',
      }
    );
  }

  handleCreatureChange = (event) => {
    this.setState({
      enteredCreature: event.target.value
    })
  }

  render() {
    // toggle things
    return (
      <AppLayout>
        {/* ADDITIONAL CONTENT */}
        BODY CONTENT
        <input
          type="text"
          placeholder="New Creature"
          onChange={this.handleCreatureChange}
        />
        <button onClick={this.handleClick}>SAVE</button>
        <p>Second Reducer Message: {this.props.secondReducer.message}</p>
        <CreatureList />
      </AppLayout>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    secondReducer: store.secondReducer,
  }
};
export default connect(mapStoreToProps)(App);
