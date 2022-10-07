import { useState } from "react";

function Menu(props){
    const [inputValue,setInputValue] = useState("")

    function handleInput (e){
        setInputValue(e.target.value);
        props.searchClubs(e.target.value)
    }
    return (
        <div className="Menu">
            <input  className="search" value={inputValue} onChange={(e)=>handleInput(e)} placeholder="search your club"   />
            <button onClick={props.showFavourites} className="favourites favHide ">SHOW MY FAVOURITES</button>
            <button onClick={props.showFollows} className="following followHide">FOLLOWING</button>
        </div>
    )
}

export default Menu;