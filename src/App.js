
import { useState } from "react"
import { useEffect } from "react";
import './App.css';
import Board from './components/Board/Board';
import boardContext from './context/boardContext';
import { word_list } from "./words";
function App() {

  const [data,setData] = useState([
    ['H','A','S','T','E'],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
])
const random_word = word_list[Math.floor(Math.random() * word_list.length)]
const randomWord = random_word.toUpperCase().split("")
  return (
    <div className="App">
      <boardContext.Provider value={{data, setData, randomWord}} >
        <Board/>
      </boardContext.Provider>
    </div>
  );
}

export default App;
