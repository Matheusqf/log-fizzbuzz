import React, { Component } from 'react';

import fizzBuzz from './fizzbuzz';

class App extends Component {
  state = {
    inputValue: '',
    result: [],
  };

  handleChangeInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleClick = () => {
    const { inputValue } = this.state;
    const result = fizzBuzz(1, inputValue );

    this.setState({
      result,
    })
  };

  renderResult = (result) => (
    <ul>
      {result.map(res => (
        <li key={res.index}>
          {res}
        </li>
      ))}
    </ul>
  );

  renderList = () => {
    const { result } = this.state;
    const shouldShowList = !!(result.length);
    
    return shouldShowList && (
      <div style={{
        marginTop: 20,
      }}>
        {this.renderResult(result)}
      </div>
    );
  }


  render() {
    const { inputValue } = this.state;
    
    return (
      <div>
        <h1>Log Challenge</h1>
        <h2>This is a program that returns the following to a contiguous sequence of numbers:</h2>
        <p>
          <b>1.</b> Whenever a number multiple of 3 occurs or contains 3 in its representation, it should be replaced by the word “fizz”;
        </p>
        <p>
          <b>2.</b> If it is a multiple of 5, or it contains 5 in its representation, it should be changed to “buzz”;
        </p>
        <p>
          <b>3.</b> If it is a multiple of 3 and 5 it should be changed to “fizzbuzz”;
        </p>
        <p>
          <b>4.</b> If both rule 1 or rule 2 and rule 3 are checked at the same time, it should be changed to “lucky”;
        </p>
        <p>
          <b>5.</b> Rules 1 and 2 are cumulative. Example: 3 should be changed to “fizz fizz”.
        </p>
        <br></br>
        <p>
          <b>Choose the final number and see your sequence: </b>
        </p>
        <input
          value={inputValue}
          onChange={this.handleChangeInputValue}
        />
        <button
          onClick={this.handleClick}
        >
          GO!
        </button>
        {this.renderList()}
      </div>
      
    );
  }
}

export default App;
