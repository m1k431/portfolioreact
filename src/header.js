import React, { Component } from 'react';
import './css/header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav id="navBar">
          <ul>
            <li><a className="nav css3button" id="intro" rel="preconnect" href="/">Intro</a></li>
            <li><a className="nav css3button" id="resume" rel="preconnect" href="/cv">CV</a></li>
            <li><a className="nav css3button" id="adhd" rel="preconnect" href="/giftedADHD">ADHD</a></li>
            <li><a className="nav css3button" id="leaflet" rel="preconnect" href="/leaflet">ME</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header;