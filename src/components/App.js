import React, { Component } from "react";
import "./free.gif";

export class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${require("./free.gif")})`,
          height: 560,
        }}
      >
        <p>
          Build an application from scratch using Redux and React (plus Redux
          Toolkit). Learn the most important concepts of practical Redux:
          actions, reducers, store, dispatch, and asynchronous API calls. Do you
          have experience using React? Have you heard of Redux, but you've put
          off learning it because it looks very complicated and all the guides
          seem overwhelming? If that's the case, this is the article for you!
          Contain your fear of containing state and come along with me on this
          relatively painless journey. Prerequisites You must already know how
          to use React for this tutorial, as I will not be explaining any
          aspects of React itself. Familiarity with HTML & CSS. Familiarity with
          ES6 syntax and features. Knowledge of React terminology: JSX, State,
          Components, Props, Lifecycle and Hooks Knowledge of React Router
          Knowledge of asynchronous JavaScript and making API calls Also,
          download Redux DevTools for Chrome or for FireFox. Goals In this
          tutorial, we will build a small blog app. It will fetch posts and
          comments from an API. I've created the same app with both plain Redux,
          and Redux Toolkit (RTK), the officially sanctioned toolset for Redux.
          Here are the links to the source and demos of both the plain and RTK
          versions. React + Redux Application (Plain Redux) Source Demo
          Application React + Redux Toolkit Application Source Demo Application
          Note: The applications are pulling from a real API via JSON
          Placeholder API. Due to rate limiting on CodeSandbox, the API may
          appear slow, but it has nothing to do with the Redux application
          itself. You can also clone the repository locally.
        </p>
      </div>
    );
  }
}

export default App;
