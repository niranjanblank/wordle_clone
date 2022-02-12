
import { useState } from "react"
import './App.css';
import Board from './components/Board/Board';
import boardContext from './context/boardContext';
function App() {
  const [data,setData] = useState([
    ['S','U','G','A','R'],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
])
  return (
    <div className="App">
      <boardContext.Provider value={{data, setData}} >
        <Board/>
      </boardContext.Provider>
    </div>
  );
}

export default App;
