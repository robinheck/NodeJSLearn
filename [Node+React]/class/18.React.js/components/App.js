import React, { Component } from 'react'
import TextDisplay from './TextDisplay'
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
    <div>
     <ul role="nav">
          <li><Link to="/TextDisplay" activeStyle={{ color: 'orange' }}>TextDisplay</Link></li>
          <li><Link to="/Proptest" activeStyle={{ color: 'red' }}>Proptest</Link></li>
        </ul>
         {this.props.children}

    </div>
  )}

}
export default App