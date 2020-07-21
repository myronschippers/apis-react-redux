import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureList extends Component {
  render() {
    return (
      <div>
        {this.props.reduxState.creatureList.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (reduxState) => {
  return {
    reduxState,
  }
};
export default connect(mapStoreToProps)(CreatureList);
