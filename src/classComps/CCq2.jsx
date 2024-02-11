
import React, { Component } from 'react';

export default class CCq2 extends Component {


  pop = () => {
    this.setState({ pop1: "Please enter a first name" })
  }

  pop01 = () => {
    this.setState({ pop2: "Please enter a last name" })
  }

  pop02 = () => {
    this.setState({ pop3: "Please enter a psychometric score" })
  }

  emp = () => {
    this.setState({ pop1: null })
    this.setState({ pop2: null })
  }

  emp1 = (e) => {
    this.setState({ pop3: null })
    if (e.target.value > 555) {
      this.setState({ res: 'You were accepted for studies' });
    }
    else if (e.target.value > 0){
      this.setState({res: 'You should try next year'})
    }
    else {
      this.setState({ res: '' });
    }

  }


  render() {
    return (
      <div>
        <p style={{ color: 'red', margin: '5px' }}>{this.state && this.state.pop1}</p>
        First name:
        <input type="text" onFocus={this.pop} onBlur={this.emp} />
        <p style={{ color: 'red', margin: '5px' }}>{this.state && this.state.pop2}</p>
        Last name:
        <input type="text" onFocus={this.pop01} onBlur={this.emp} />
        <p style={{ color: 'red', margin: '5px' }}>{this.state && this.state.pop3}</p>
        Psychometric score: <input type='text' onFocus={this.pop02} onBlur={this.emp1} />
        <p style={{ color: 'red', margin: '5px' }}>{this.state && this.state.res}</p>
      </div>
    )
  }
}
