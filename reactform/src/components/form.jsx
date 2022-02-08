import React from 'react'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
      phoneInput: '',
      addInput: '',
      cityInput: '',
      stateInput: '',
      zipInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Submission Successful ');
    event.preventDefault();
  }


  render() {
    return (
      <form className="split left" onSubmit={this.handleSubmit}>
        <h1> This is a form I guess</h1>
        <p> Submit your contact info:</p>
        <label>
          Name:
          <input type='text' value={this.state.nameInput} onChange={this.handleChange} />
        </label><br />
        <label>
          email:
          <input type='text' value={this.state.emailInput} onChange={this.handleChange} />
        </label><br />
        <label>
          Phone Number:
          <input type='text' value={this.state.phoneInput} onChange={this.handleChange} />
        </label><br />
        <label>
          Address:
          <input type='text' value={this.state.addressInput} onChange={this.handleChange} />
        </label><br />
        <label>
          City:
          <input type='text' value={this.state.cityInput} onChange={this.handleChange} />
        </label><br />
        <label>
          State:
          <input type='text' value={this.state.stateInput} onChange={this.handleChange} />
        </label><br />
        <label>
          Zip Code:
          <input type='text' value={this.state.zipInput} onChange={this.handleChange} />
        </label><br />
        <input type="submit" value="Submit" />
      </form>);
  }
};

export default Form;