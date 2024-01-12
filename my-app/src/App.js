import "./App.module.css";
// import FunctionalGreetingComponent from './components/FunctionalGreetingComponent';
// import StatefulGreetingComponenet from './components/StatefulGreetingComponenet';
// import HooksComponent from './components/HooksComponent';
import SideBar from "./components/SideBar";
// import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
// import Content from "./components/Content";
// import ContentHooks from "./components/ContentHooks";
// import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";

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
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;
