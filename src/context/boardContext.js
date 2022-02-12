import {createContext} from "react"

const boardContext = createContext({
    data: [   
    ],
    setData: ()=>{   
    },
    randomWord : []
})

export default boardContext;