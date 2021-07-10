import React from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Mood from './Components/Mood/Mood';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
        <Mood />
      </main>
      <footer>
        Mayberry Copyright
      </footer>
    </div>
  );
}

export default App;