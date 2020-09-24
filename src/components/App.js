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
    const  {search} = this.state
    const filteredUsers = this.state.data.filter((item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div>
        <div style={{height:110,backgroundColor:"#bf00ff"}}>
          <h1>React Filter!!</h1>
        <input style={{float:"right"}} type="text" placeholder="Search.." onChange={this.onchange} />
        </div>
      <div style={{backgroundColor:'black', color:'green'}}>
          <div className="row">
          {filteredUsers.map((user) => (
          <div className="col-md-4">
           
            <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
          <p className="card-text">Email: {user.email}<p>city: {user.address.city}</p><p>Address: {user.address.street}, {user.address.suite}</p></p>

            </div>
            <div className="card-footer">
          <small className="text-muted">Location: {user.address.geo.lat}, {user.address.geo.lng}</small>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
    )
  }
}
export default App
