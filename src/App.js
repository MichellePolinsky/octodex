import React, { Component } from 'react'
import DisplayCats from './components/octocards'

class App extends Component {
  render() {
    return (
      <main>
        <nav className="nav-bar">
          <div className="left-side">
            <h1>Octodex</h1>
            <h2 className="home">Home</h2>
            <h2>FAQ</h2>
          </div>
          <div className="right-side">
            <h2>Follow Us on Twitter</h2>
            <h2>Back to GitHub</h2>
          </div>
        </nav>
        <main className="main-body">
          <div className="container-main">
            <DisplayCats />
          </div>
        </main>
        <footer className="footer">
          © 2013 – 2019 GitHub, Inc. All rights reserved.
        </footer>
      </main>
    )
  }
}

export default App
