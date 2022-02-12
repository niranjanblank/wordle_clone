import { useEffect, useState } from "react"
import classes from "./LetterCard.module.css"

const LetterCard = ({letter_type,data}) => {
    const [letterClass,setLetterClass] = useState('')

    useEffect(()=>{
        // if(letter_type==="correct"){
        //     setLetterClass(classes.correct)
        // }
        // else if(letter_type==="empty"){
        //     setLetterClass(classes.empty)
        // }
        // else if(letter_type==="filled"){

        // }
        // else if()
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
    
    return (
        <div className={`${classes.block} ${letterClass}`}>
            <p>{data?data:<input className={`${classes.input}`} type="text" maxLength={1}></input>}</p>
        </div>
    )
}

export default LetterCard