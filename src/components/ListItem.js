import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editedName: "",
      editedPhone: "",
    };
  }

  /* for editing contact */
  handleEdit = () => {
    this.setState({
      editMode: true,
    });
  };

  /* for updating name */
  handleNameChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      editedName: e.target.value,
    });
  };

  /* for updating phone */
  handlePhoneChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      editedPhone: e.target.value,
    });
  };

  /* for updating contact */
  handleUpdateContact = async () => {
    const { editedName, editedPhone } = this.state;
    const { handleUpdate, id } = this.props;
    if (editedName && editedPhone) {
      await handleUpdate(editedName, editedPhone, id);
      this.setState({
        editMode: false,
      });
    }
  };

  render() {
    const { name, contact, handleDelete, id } = this.props;
    const { editMode } = this.state;
    return (
      <li>
        <p className="name-container">

           {/* for name */}
          {editMode ? (
            <input
              placeholder="Name..."
              onChange={this.handleNameChange}
              required
            />
          ) : (
            name
          )}
        </p>

        {/* for phone */}
        <p className="phone-container">
          {editMode ? (
            <input
              placeholder="Phone..."
              onChange={this.handlePhoneChange}
              required
            />
          ) : (
            contact
          )}
        </p>
        <p className="btns-container">

          {/* for updating contact */}
          {editMode ? (
            <img
              className="list-btn"
              onClick={this.handleUpdateContact}
              src="https://cdn-icons-png.flaticon.com/512/1688/1688988.png"
              alt="submit-edit"
            />
          ) : (

            // for editing the contact
            <img
              className="list-btn"
              onClick={this.handleEdit}
              src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
              alt="edit-btn"
            />
          )}

          {/* for deleting contact */}
          <img
            className="list-btn"
            onClick={() => handleDelete(id)}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete-btn"
          />
        </p>
      </li>
    );
  }
}

export default ListItem;
