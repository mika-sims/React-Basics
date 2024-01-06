import "./App.module.css";
// import FunctionalGreetingComponent from './components/FunctionalGreetingComponent';
// import StatefulGreetingComponenet from './components/StatefulGreetingComponenet';
// import HooksComponent from './components/HooksComponent';
import SideBar from "./components/SideBar";
// import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingComponent name="John" />
      <hr />
      <StatefulGreetingComponenet name="Anna" />
      <hr />
      <HooksComponent name="Bob" /> */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <SideBar />
    </div>
  );
}

export default App;
