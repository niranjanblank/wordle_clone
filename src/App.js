
import { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import Board from './components/Board/Board';
import { word_list } from "./words";
import { setRandomWord } from "./store/boardSlice";
function App() {

const dispatch = useDispatch()

useEffect(()=> {
  const random_word = word_list[Math.floor(Math.random() * word_list.length)]
  const randomWord = random_word.toUpperCase().split("")
  dispatch(setRandomWord(randomWord))
},[])

  return (
    <div className="App">

        <Board/>

    </div>
  );
}

export default App;
