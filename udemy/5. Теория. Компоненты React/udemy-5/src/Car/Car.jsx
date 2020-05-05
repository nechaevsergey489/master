import React from "react";
import classes from "./Car.css";
import PropTypes from "prop-types";
import withClass from "../hoc/withClass";

class Car extends React.Component {
  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.focus();
    }
  }

  render() {
    console.log("Car render");

    const inputClasses = [classes.input];

    if (this.props.name !== "") {
      inputClasses.push(classes.green);
    } else {
      inputClasses.push(classes.red);
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold);
    }

    return (
      <React.Fragment>
        <h3>Сar name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          ref={(inputRef) => (this.inputRef = inputRef)}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.PropTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withClass(Car, classes.Car);
