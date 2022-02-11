import LetterCard from "../LetterCard/LetterCard"
import classes from "./Board.module.css"
const Board = () => {
    const array = [
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']
    ]
    const board = array.map(arr=>{
        return (
            <div className={classes.layer}>
                {
                    arr.map(letter => {
                        return (<LetterCard/>)
                    })
                }
            </div>
        )
    })
    return (
        <div>
            {board}
        </div>
    )
}

export default Board
