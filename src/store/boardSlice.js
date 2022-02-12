import { createSlice, current } from "@reduxjs/toolkit";

const initialBoardState={ 
   board: [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
    ],
    randomWord: [],
    currentWord: ['','','','','']
}

const boardSlice = createSlice({
    name: 'board',
    initialState: initialBoardState,
    reducers: {
        setRandomWord: (state,action)=> {
            state.randomWord = action.payload
            console.log(state.randomWord)
        },
        setBoard: (state,action)=> {

            state.board[action.payload.id] = action.payload.data

        },
        setCurrentWord: (state,action)=> {
            // let current_array = [...state.currentWord]
            // current_array[action.id]=action.letter
            // state.currentWord = current_array
            // console.log('hello',current_array)
            console.log(state.currentWord)
        }

    }
})

export const {setRandomWord,setBoard, setCurrentWord} = boardSlice.actions

export default boardSlice.reducer