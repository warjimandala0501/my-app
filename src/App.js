import logo from './logo.svg';
import './App.css';
import LogIn from './Components/LogIn/LogIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LogIn />
      </header>
    </div>
  );
}

export default App;
