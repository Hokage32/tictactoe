import React from "react";





const Square = (props) => {
    console.log(props.squares, props.player)


const handleClick = () => {
    if(!props.squareValue && props.player){
        props.squares.splice(props.index,1,"X")
        props.setSquares(props.squares)
        props.setPlayer(false)
    }else if(!props.squareValue && !props.player){
        props.squares.splice(props.index,1,"O")
        props.setSquares(props.squares)
        props.setPlayer(true)
    }
}


    return (
        <div className="square" onClick={handleClick}>
            {props.squareValue === "O" ? <p>O</p> :  props.squareValue}
        </div>
    )

}

export default Square