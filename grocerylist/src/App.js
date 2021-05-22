import './App.css';

import {Header} from "./components/navbar";
import {Grocery} from "./components/mainContent";
function App() {
  return (
    <div className="App">
     <Header/>
     <Grocery/>
    </div>
  );
}

export default App;
