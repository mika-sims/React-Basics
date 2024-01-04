import './App.css';
import FunctionalGreetingComponent from './components/FunctionalGreetingComponent';
import StatefulGreetingComponenet from './components/StatefulGreetingComponenet';
import HooksComponent from './components/HooksComponent';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingComponent name="John" />
      <hr />
      <StatefulGreetingComponenet name="Anna" />
      <hr />
      <HooksComponent name="Bob" />
    </div>
  );
}

export default App;
