import React, { Component } from 'react';

class Poketype extends Component {
  render() {
    const { typeNumber } = this.props;
    return (
      <div className="Poketype">
        <h2>{`You got ${typeNumber}`}</h2>
      </div>
    );
  }
}

export default Poketype;
