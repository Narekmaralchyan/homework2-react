import { useState } from "react"

function Favourites ({favouriteRef , favourites ,likeClub }){    
    return(
        <div ref={favouriteRef} className="Favourites favHide hidden ">
            <p className="favHide">Favourite clubs</p>
            {favourites.map(club=>{
                return(
                    <div key={club.name} className="miniClub favHide">
                        <div className="miniInfo favHide">
                            <img src={club.img} className="miniIcon favHide" />
                            <h3 className="favHide">{club.name}</h3>
                        </div>
                        <button className="favHide" onClick={()=>likeClub(club.name)}>UNLIKE</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Favourites