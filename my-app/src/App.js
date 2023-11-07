import homeImage from "./home.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={homeImage} className="Home-Image" alt="logo" />
      <div className="Home-Content">
        <p>
          Welcome to Nino's Portfolio – a showcase of my journey through the
          exciting world of web development and design. I invite you to explore
          this digital canvas where I have poured my passion, creativity, and
          expertise into creating captivating and user-friendly web
          applications.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the projects
        </a>
      </div>
    </div>
  );
}

export default App;
