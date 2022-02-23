import { useContext, useEffect, useState } from "react"
import LetterCard from "../LetterCard/LetterCard"
import classes from "./Layer.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setBoard } from "../../store/boardSlice";
const Layer = ({level}) => {
    const data = useSelector((state)=>state.board.board)
    const randomWord = useSelector((state)=>state.board.randomWord)
    const dispatch = useDispatch()
    const current_word= randomWord

    const [letterOne,setLetterOne] = useState('')
    const [letterTwo,setLetterTwo] = useState('')
    const [letterThree,setLetterThree] = useState('')
    const [letterFour,setLetterFour] = useState('')
    const [letterFive,setLetterFive] = useState('')
    // checks if the letter are at correct location

    useEffect(()=> {
        //update the board value once last letter is typed
        const current_array = [letterOne,letterTwo,letterThree,letterFour,letterFive]
        if (current_array.join()==current_word.join()){
            console.log('You Won')
        }
        updateBoard()
        
    },[letterFive])

    //updates the board values
    const updateBoard = () => {
            dispatch(setBoard({id:level,data: [letterOne,letterTwo,letterThree,letterFour,letterFive]}))
    }
    
    // checks letter if they match or not
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
            letter_data={data[levelNumber][0]} letter_index="0" level={levelNumber}
            letterNumber= {letterOne} setLetterNumber={setLetterOne}
            />
            <LetterCard letter_type={(data[levelNumber][1]!=="")?checkLetter(data[levelNumber][1],1):''} 
            letter_data={data[levelNumber][1]} letter_index="1" level={levelNumber}
            letterNumber= {letterTwo} setLetterNumber={setLetterTwo}/>
            <LetterCard letter_type={(data[levelNumber][2]!=="")?checkLetter(data[levelNumber][2],2):''} 
            letter_data={data[levelNumber][2]} letter_index="2" level={levelNumber}
            letterNumber= {letterThree} setLetterNumber={setLetterThree}/>
            <LetterCard letter_type={(data[levelNumber][3]!=="")?checkLetter(data[levelNumber][3],3):''} 
            letter_data={data[levelNumber][3]} letter_index="3" level={levelNumber}
            letterNumber= {letterFour} setLetterNumber={setLetterFour}/>
            <LetterCard letter_type={(data[levelNumber][4]!=="")?checkLetter(data[levelNumber][4],4):''} 
            letter_data={data[levelNumber][4]} letter_index="4" level={levelNumber}
            letterNumber= {letterFive} setLetterNumber={setLetterFive}/>
        </div>
    )
}

export default Layer