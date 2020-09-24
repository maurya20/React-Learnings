import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
    search: "",
  };
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }
  onchange = (e) => {
    this.setState({ search: e.target.value })
  }
  render() {
    const { search } = this.state
    const filteredUsers = this.state.data.filter((item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div>
        <input type="text" placeholder="Search.." onChange={this.onchange} />

        {filteredUsers.map((user) => (
          <div>
            <h3>{user.name}</h3>
            <p>
              {user.address.city},Pin- {user.address.zipcode}, Location:
              {user.address.geo.lng}
            </p>
          </div>
        ))}
      </div>
    )
  }
}
export default App;
