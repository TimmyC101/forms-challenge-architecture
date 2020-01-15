import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleClick(e) {
    var name = e.target.name;
    var type = e.target.type;
    var value = e.target.value;
    var checked = e.target.checked;
    if (type === "checkbox") { // for checkboxes, set state property equal to true or false
        this.setState({
          [name]: checked
        })
    }
    else { // for all other input types, set state property equal to input value
      this.setState({
        [name]: value
      })
    }
  }

  submitForm() {
    var text = "";
    if (this.state.isVegan) {
      text += " Vegan,"
    }
    if (this.state.isKosher) {
      text += " Kosher,"
    }
    if (this.state.isLactoseFree) {
      text += " Lactose Free,"
    }
    if (!this.state.isVegan && !this.state.isKosher && !this.state.isLactoseFree) {
      text = "No Dietary Restrictions"
    }
    window.alert(
      "First Name: " + this.state.firstName + "\n" + 
      "Last Name: " + this.state.lastName + "\n" +
      "Age: " + this.state.age + "\n" +
      "Gender: " + this.state.gender + "\n" +
      "Destination: " + this.state.location + "\n" +
      "Dietary Restrictions: " + text.slice(0, -1)
    );
  }

  render() {
    return(
      <FormComponent
        handleClick = {this.handleClick}
        submitForm = {this.submitForm}
        data = {this.state}
      />
    )
  }

}

export default FormContainer;
