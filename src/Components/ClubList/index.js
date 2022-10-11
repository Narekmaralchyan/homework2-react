import { useEffect, useReducer } from "react";
import Club from '../ClubComponent'

function ClubList ({clubs , likeClub ,followClub}){
   
   return <div className="clubList">
    {clubs.map((item)=>{
      return <Club
                key={item.name} 
                {...item}
                likeClub={likeClub}
                followClub={followClub}
                // followHandle ={followHandle}
                 />
    })}
  </div>
}
export default ClubList;