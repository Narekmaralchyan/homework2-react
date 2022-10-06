import { useState } from "react"

function Favourites (props){
    
    
    return(
        <div ref={props.favouriteRef} className="Favourites favHide hidden ">
            <p className="favHide">Favourite clubs</p>
            {props.favourites.map(club=>{
                return(
                    <div key={club.name} className="miniClub favHide">
                        <div className="miniInfo favHide">
                            <img src={club.img} className="miniIcon favHide" />
                            <h3 className="favHide">{club.name}</h3>
                        </div>
                        <button className="favHide" onClick={()=>props.unlike(club.name)}>UNLIKE</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Favourites