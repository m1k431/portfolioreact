import './css/app.css';
//import Footer from './footer';
//import Header from './header';
import VideoJonglage from './jonglage';
import JeuCv from './JeuCv'
import Soleil from './soleil'
import Particles from 'react-particles-js'

function App() {
  return (
    <div className="App">
        <Particles id='Particles' params={{
          fpsLimit: 60,
          backgroundMode: {
            enable: true,
            zIndex: -1
          },
          "particles": {
            "number": {
              "value": 40
            },
            "size": {
              "value": 1
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
        {/*<VideoJonglage></VideoJonglage>*/}
        <JeuCv></JeuCv>
        {/*<Soleil></Soleil>*/}
    </div>
  );
}

export default App;
