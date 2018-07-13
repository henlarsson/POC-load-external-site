import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="login-page">
        <div class="form">
          <form method="post" action="/authn/authenticate/html-scim">
            <input type="text" name="userName" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
