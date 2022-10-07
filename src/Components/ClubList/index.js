import { useEffect, useReducer } from "react";
import Club from '../ClubComponent'

function ClubList ({clubs}){
   
   return <div className="clubList">
    {clubs.map((item)=>{
      return <Club
                key={item.name} 
                {...item}
                // likeHandle={likeHandle}
                // followHandle ={followHandle}
                 />
    })}
  </div>
}
export default ClubList;