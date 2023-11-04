import Image from "./image"
import './App.css';
import {data} from "./data.js"



function App() {
 
  return (
    <div> <h1>Project 1: Carousel</h1>
    <div className="App" >
      
      < Image data={data}/>
      
    </div>
    </div>
  );
}

export default App;
