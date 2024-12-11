import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        radio_value: "",
      };
    }
  
    onChange = (event) => {
      this.setState({
        radio_value: event.target.value,
      });
    };
  
    render() {
      return (
        <div>
          <label>
            <input type="radio" name="radio" value="1" onChange={this.onChange}/> First button 
          </label> <br />
          <label>
            <input type="radio" name="radio" value="2" onChange={this.onChange} /> Second button
           </label> <br />
           <label>
            <input type="radio" name="radio" value="3" onChange={this.onChange} /> Third button 
          </label> <br />
          <p>The selected value is: {this.state.radio_value}</p>
        </div>
      );
    }
  }

  export default MyComponent;