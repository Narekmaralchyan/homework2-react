import { useState } from "react";

function Menu({searchClubs,showFavourites ,showFollows}){
    const [inputValue,setInputValue] = useState("")

    function handleInput (e){
        setInputValue(e.target.value);
        searchClubs(e.target.value)
    }
    return (
        <div className="Menu">
            <input  className="search" value={inputValue} onChange={(e)=>handleInput(e)} placeholder="search your club"   />
            <button  className="favourites favHide ">SHOW MY FAVOURITES</button>
            <button  className="following followHide">FOLLOWING</button>
        </div>
    )
}

export default Menu;