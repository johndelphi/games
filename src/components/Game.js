import React from "react"
import Counter from "./Counter"

const Game=(props)=>{
    return(
    <div className="player">
       <span className="player-name">
       <button className="remove-player" onClick={()=>
       props.remove.removegame(props.id)}>x</button>
       {props.Game}
       </span>
       <Counter />
       </div>
    );
}

export default Game