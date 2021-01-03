
import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";
import Body from './Body'

function App() {
  return (
    <div className="app">
     <Header />
     <div className="app_main">
     <SideBar />
     <Body />
     </div>
    </div>
  );
}

export default App;
