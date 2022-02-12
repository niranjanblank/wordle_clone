import { useContext } from "react"
import LetterCard from "../LetterCard/LetterCard"
import classes from "./Layer.module.css"
import boardContext from "../../context/boardContext"
const Layer = ({level}) => {
    const {data,setData}=useContext(boardContext)
    let levelNumber = parseInt(level)
    return (
        <div className={classes.layer}>
            <LetterCard letter_type={(data[levelNumber][0]!=="")?'wrong':''} data={data[levelNumber][0]}/>
            <LetterCard letter_type={(data[levelNumber][1]!=="")?'wrong':''} data={data[levelNumber][1]}/>
            <LetterCard letter_type={(data[levelNumber][2]!=="")?'wrong':''} data={data[levelNumber][2]}/>
            <LetterCard letter_type={(data[levelNumber][3]!=="")?'wrong':''} data={data[levelNumber][3]}/>
            <LetterCard letter_type={(data[levelNumber][4]!=="")?'wrong':''} data={data[levelNumber][4]}/>
        </div>
    )
}

export default Layer