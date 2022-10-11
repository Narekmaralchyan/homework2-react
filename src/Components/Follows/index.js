import { useState } from "react"

function Follows ({followRef , follows ,followClub}){
    
    return(
        <div ref={followRef} className="Follows followHide  hidden">
            <p className="followHide">Follows</p>
            {follows.map(club=>{
                return(
                    <div key={club.name} className="miniClub followHide">
                        <div className="miniInfo followHide">
                            <img src={club.img} className="miniIcon followHide" />
                            <h3 className="followHide">{club.name}</h3>
                        </div>
                        <button className="followHide" onClick={()=>followClub(club.name)}>UNFOLLOW</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Follows