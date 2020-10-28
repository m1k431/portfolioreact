import React, { Component } from 'react'
import './css/footer.css'
import GitHubL from './img/gitHubMark.png';
import GitHubR from './img/gitHubW.png';
import linkedIn from './img/LinkedIn_Logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <a className="minilogL" rel="preconnect" href="https://github.com/m1k431">
          <img src={GitHubL} alt="git"
            height="35" />
          <img src={GitHubR} alt="git" height="35" />
        </a>
        <a className="minilogR" rel="preconnect" href="https://www.linkedin.com/in/mika%C3%ABl-garcia/">
          <img
            src={linkedIn} alt="linkedin" height="35" />
        </a>
      </footer>
    )
  }
}
export default Footer