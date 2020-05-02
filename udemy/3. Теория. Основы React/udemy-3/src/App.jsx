import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mazda", year: 2010 },
    ],
    pageTitle: "React components",
    showCars: false,
    // inputText: "",
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeName = (name, index) => {
    const newArray = [...this.state.cars];
    newArray[index].name = name;
    this.setState({
      cars: newArray,
    });
  };

  deleteHandler = (index) => {
    console.log("delete", index);
    const newArray = [...this.state.cars];
    newArray.splice(index, 1);
    this.setState({
      cars: newArray,
    });
  };

  render() {
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeName={(event) =>
              this.onChangeName(event.target.value, index)
            }
            onDelete={(e) => this.deleteHandler(index)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        {cars}
      </div>
    );
  }
}

export default App;
