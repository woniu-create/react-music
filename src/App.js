import logo from "./logo.svg";
import play from "./assets/prev.svg";
import "./App.css";
// import music from "./assets/周杰伦-花海.mp3";
// import music from "./assets/许嵩 - 有何不可.mp3";
import music from "./assets/周杰伦 - 稻香.mp3";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <img src={play} alt="play" />
      <figure>
        <figcaption>Listen to the T-Rex:</figcaption>
        <audio autoPlay loop controls src={music}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
}

export default App;
