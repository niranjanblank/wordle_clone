import classes from "./LetterCard.module.css"

const LetterCard = () => {
    return (
        <div className={`${classes.block} ${classes.empty}`}>
            <p>A</p>
        </div>
    )
}

export default LetterCard