import { useContext } from "react"
import LetterCard from "../LetterCard/LetterCard"
import classes from "./Layer.module.css"
import boardContext from "../../context/boardContext"
import { word_list } from "../../words"
const Layer = ({level}) => {
    const {data,setData,randomWord}=useContext(boardContext)
   
    const current_word= randomWord

    // checks if the letter are at correct location
    const checkLetter = (letter,index)=> {

        if(letter===current_word[index]){
            return "correct"
        }
        else{
            if(current_word.includes(letter)){
                return "hint"
            }
            return "wrong"
        }
    }
    let levelNumber = parseInt(level)
    return (
        <div className={classes.layer}>
            <LetterCard letter_type={(data[levelNumber][0]!=="")?checkLetter(data[levelNumber][0],0):''} 
            data={data[levelNumber][0]}/>
            <LetterCard letter_type={(data[levelNumber][1]!=="")?checkLetter(data[levelNumber][1],1):''} 
            data={data[levelNumber][1]}/>
            <LetterCard letter_type={(data[levelNumber][2]!=="")?checkLetter(data[levelNumber][2],2):''} 
            data={data[levelNumber][2]}/>
            <LetterCard letter_type={(data[levelNumber][3]!=="")?checkLetter(data[levelNumber][3],3):''} 
            data={data[levelNumber][3]}/>
            <LetterCard letter_type={(data[levelNumber][4]!=="")?checkLetter(data[levelNumber][4],4):''} 
            data={data[levelNumber][4]}/>
        </div>
    )
}

export default Layer