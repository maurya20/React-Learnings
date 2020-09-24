import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
  };
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <div>
          <h3>{item.name}</h3>
        <p>{item.address.city},Pin- {item.address.zipcode}, Location:{item.address.geo.lng}</p>
        </div>
        ))}
      </div>
    )}}
export default App;
