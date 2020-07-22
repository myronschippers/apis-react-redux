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

  handleClickSecond = () => {
    this.props.dispatch(
      { //action
        type: 'SECOND',
      }
    );
  }

  render() {
    // toggle things
    return (
      <AppLayout>
        {/* ADDITIONAL CONTENT */}
        <div className="stackBlock">
          BODY CONTENT
        </div>
        <div className="stackBlock">
          <button className="btn" onClick={this.handleClickSecond}>SEND SECOND</button>
          <p>Second Reducer Message: {this.props.secondReducer.message}</p>
        </div>
        <div className="stackBlock stackBlock_orgContent">
          <input
            className="field"
            type="text"
            placeholder="New Creature"
            onChange={this.handleCreatureChange}
          />
          <button className="btn" onClick={this.handleClick}>SAVE</button>
        </div>
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
