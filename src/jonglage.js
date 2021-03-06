import React, { Component } from 'react'
import './css/jonglage.css'
import VideoJ from './img/theOneFinal.mp4'
import VideoPoster from './img/kuansiFalls.jpg'

class Jonglage extends Component {
  render() {
    const bienvenue = 'BIENVENUE DANS MON LABO DE DEV',
    welcome = 'WELCOME TO MY DEVLAB',
    moiFR = 'JE SUIS MIKAEL',
    metierFR = 'DEVELOPPEUR IBM SQL RPGLE NODEJS',
    moiUS = 'MY NAME IS MIKAEL',
    metierUS = 'I AM AN IBM SQL RPGLE NODEJS DEVELOPER'
    return (
      <section id="VideoJonglage" className="me">
        <h1 className="english">{welcome}</h1>
        <h1 className="french">{bienvenue}</h1>
        <video id="jugglejungle" autoPlay loop poster={VideoPoster} playsInline controls>
          <source src={VideoJ} type="video/mp4"/>
        </video>
        <h2 className="english">{moiUS}</h2>
        <h2 className="english">{metierUS}</h2>
        <h2 className="french">{moiFR}</h2>
        <h2 className="french">{metierFR}</h2>
      </section>
    )
  }
}
export default Jonglage