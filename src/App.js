import './css/app.css';
import Footer from './footer';
import Header from './header';
import VideoJonglage from './jonglage';
import JeuCv from './JeuCv'
import Soleil from './soleilReact'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Body">
        <VideoJonglage></VideoJonglage>
        <JeuCv></JeuCv>
        <Soleil></Soleil>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
