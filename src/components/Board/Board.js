import { useContext } from "react"
import boardContext from "../../context/boardContext"
import Layer from "../Layer/Layer"
import LetterCard from "../LetterCard/LetterCard"
import classes from "./Board.module.css"
const Board = () => {
    const {data,setData}=useContext(boardContext)
    console.log(data)
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
