import { useReducer } from "react";
import Data from './data.json'
import Club from '../ClubComponent'

function reducer(){

}

function ClubList (props){

    const [clubs,dispatch] = useReducer(reducer,Data)



   return <div className="clubList">
    {clubs.map((item,index)=>{
      return <Club key={index} {...item}/>
    })}
  </div>
}
export default ClubList;