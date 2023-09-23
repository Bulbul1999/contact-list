import React, { Component } from "react";

class AddContacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
    };
  }

  /* on adding contact */
  handleChange = (inputType, e) => {
    if (inputType === "name") {
      this.setState({
        name: e.target.value,
      });
      return;
    }
    this.setState({
      phone: e.target.value,
    });
  };

  /* on clicking button Add contact */
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { addContact } = this.props;
    if (name && phone) {
      addContact(name, phone);
      this.setState({
        name: "",
        phone: "",
      });
    }
  };

  render() {
    const { name, phone } = this.state;
    return (
      <div id="add-contacts-container">
        <h1>Add Contact</h1>
        <form>
          {/* Enter name */}
          <input
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => this.handleChange("name", e)}
          />

          {/* Enter phone */}
          <input
            placeholder="Enter Phone"
            value={phone}
            required
            onChange={(e) => this.handleChange("phone", e)}
          />
          <br />

          {/* Button */}
          <button onClick={this.handleSubmit}>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContacts;
