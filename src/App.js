import logo from './logo.svg';
import './App.css';
import Square from './Square';
import { useState } from 'react';
import React from 'react';

function App() {

  const [squares, setSquares] = useState(["","","","","","","","",""])
  const [player, setPlayer] = useState(true)


const handleClick = () => {
  setSquares(["","","","","","","","",""])
  setPlayer(true)
}

const calculateWinner = (arr) => {
let lines = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

for(let i = 0; i < lines.length; i++){
  const [a,b,c] = lines[i]


  if(
    arr[a] &&
    arr[a] === arr[b] &&
    arr[a] === arr[c] 
  ){
    return `${arr[a]} won!`
  }

}
return "Who will win?"
}

  
  return (
    <div className="App" >
      <button onClick={handleClick}>Reset</button>
      <span>{calculateWinner(squares)}</span>
      <div className='container'>
        {squares.map((value, index) => {
          
          return (<Square 
            squares={squares} 
            setSquares={setSquares} 
            player={player} 
            setPlayer={setPlayer}
            squareValue={value}
            index={index}>
            </Square> )

        })}

      </div>
     
    </div>
  );
}

export default App;
