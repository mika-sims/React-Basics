import './App.css';
import FunctionalGreetingComponent from './components/FunctionalGreetingComponent';
import StatefulGreetingComponenet from './components/StatefulGreetingComponenet';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingComponent name="John" />
      <hr />
      <StatefulGreetingComponenet name="Anna" />
    </div>
  );
}

export default App;
