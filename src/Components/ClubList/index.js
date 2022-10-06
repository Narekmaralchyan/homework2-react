import { useEffect, useReducer } from "react";
import Data from './data.json'
import Club from '../ClubComponent'

const ACTION_TYPES = {
    LIKE_ITEM:"likeItem",
    FOLLOW_ITEM:"FollowItem",
    DELETE_ITEM:"DeleteItem",
    SEARCH_LIST:"SearchList"
}

function reducer(state,action){
    const { payload: {name,value}}= action
    switch(action.type){

        case ACTION_TYPES.LIKE_ITEM:
            return state.map(club=>{
                if(club.name == name) club.like = !club.like;
                return club;
            });

        case ACTION_TYPES.FOLLOW_ITEM:
            
            return state.map(club=>{
                if(club.name == name) club.follow = !club.follow;
                return club;
            })

        case ACTION_TYPES.DELETE_ITEM:
            return state.filter(club=>club.name!=name);
        
        case ACTION_TYPES.SEARCH_LIST:{
                return Data.filter(club=> club.name.toUpperCase().includes(value.toUpperCase()))
        }
    }
    return state;
}

function ClubList (props){

    const [clubs,dispatch] = useReducer(reducer,Data)
    
    useEffect(()=>{
        
            dispatch({
                type:ACTION_TYPES.SEARCH_LIST,
                payload:{
                    value:props.searchValue
                }
            })
        
    },[props.searchValue])

    function likeHandle (name) {
        dispatch(
            {
                type:ACTION_TYPES.LIKE_ITEM , 
                payload:{name}
            });
        setTimeout(()=>{
            props.handleFavourites(clubs.filter(club=>club.like))
        })
    }
    function followHandle(name){
        dispatch(
            {
                type:ACTION_TYPES.FOLLOW_ITEM , 
                payload:{name}
            });
        setTimeout(()=>{
            props.handleFollows(clubs.filter(club=>club.follow))
        })
    }


   return <div className="clubList">
    {clubs.map((item)=>{
      return <Club
                key={item.name} 
                {...item}
                likeHandle={likeHandle}
                followHandle ={followHandle}
                deleteHandle ={(name)=>{dispatch({type:ACTION_TYPES.DELETE_ITEM , payload:{name,}})}}
                 />
    })}
  </div>
}
export default ClubList;