import React from "react";
class A extends React.Component {
  componentDidMount() {
    console.log("1");
  }
  render() {
    return <B />;
  }
}

class B extends React.Component {
  componentDidMount() {
    console.log("2");
  }
  render() {
    return <C />;
  }
}

class C extends React.Component {
  componentDidMount() {
    console.log("3");
  }
  render() {
    return <D />;
  }
}

class D extends React.Component {
  componentDidMount() {
    console.log("4");
  }
  render() {
    return <h1>Hello</h1>;
  }
}
export default A;
