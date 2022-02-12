
import Layer from "../Layer/Layer"
import LetterCard from "../LetterCard/LetterCard"
import { useSelector } from "react-redux";
import classes from "./Board.module.css"
const Board = () => {
    // const {data,setData,randomWord}=useContext(boardContext)
    const data= useSelector((state)=>state.board.board)
    const randomWord = useSelector((state)=>state.board.randomWord)
    console.log(data)
    console.log('guessed_word',data[0])
    console.log('random word',randomWord)
    // const array = [
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','','']
    // ]
 
    return (
        <div>
            <Layer level="0"/>
            <Layer level="1"/>
            <Layer level="2"/>
            <Layer level="3"/>
            <Layer level="4"/>
            <Layer level="5"/>
        </div>
    )
}

export default Board
