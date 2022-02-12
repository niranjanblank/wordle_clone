import { useEffect, useState } from "react"
import classes from "./LetterCard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setBoard,setCurrentWord } from "../../store/boardSlice";
const LetterCard = ({letter_type,letter_data,letter_index,level, letterNumber, setLetterNumber}) => {
    const dispatch = useDispatch()
    const [letterClass,setLetterClass] = useState('')
    const data= useSelector((state)=>state.board.board)
    useEffect(()=>{
        switch(letter_type){
            case "correct": 
                    setLetterClass(classes.correct)
                    break;
            case "empty":
                    setLetterClass(classes.empty)
                    break;
            case "filled":
                setLetterClass(classes.filled)
                break;
            case "hint":
                setLetterClass(classes.hint)
                break;
            case "wrong":
                setLetterClass(classes.wrong)
                break;
            default:
                setLetterClass(classes.empty)
                break;
        }
    
    },[letter_type])
    const handleKeyDown= (e)=> {
        const letter = `${e.key}`
        if (letter.length === 1 && letter.match(/[a-z]/i)){
            setLetterNumber(`${e.key}`.toUpperCase())
        }
    }
    return (
        <div className={`${classes.block} ${letterClass}`}>
            <p>{letter_data?letter_data:<input className={`${classes.input}`} onKeyDown={(e)=>{handleKeyDown(e)}} type="text" maxLength={1}></input>}</p>
            {/* <p >{data}</p> */}
        </div>
    )
}

export default LetterCard