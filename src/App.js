import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Users from './components/Users'
import {render} from '@testing-library/react'

class App extends Component {
  render() {
    return(
      <div className="container">
        <Navbar />
        <hr />
        <Users />
      </div>
    )
  }
}
export default App;
