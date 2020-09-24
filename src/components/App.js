import React, { Component } from "react"
import $ from 'jquery'

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
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return (
      <div><input id="myInput" type="text" placeholder="Search.."/>
      
        {this.state.data.map((item) => (
         <div id="myDIV">
          <h3>{item.name}</h3>
        <p>{item.address.city},Pin- {item.address.zipcode}, Location:{item.address.geo.lng}</p>
        </div>
        ))}
      </div>
    )}}
export default App;
