import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ClubList from './Components/ClubList';
import Data from './Components/ClubList/data.json'
import Menu from './Components/Menu';
import Favourites from './Components/Favourites';
import Follows from './Components/Follows';

const ACTION_TYPES = {
  LIKE_ITEM: "likeItem",
  FOLLOW_ITEM: "FollowItem",
  SEARCH_LIST: "SearchList"
}

const initialState = {
  clubs: Data,
}

function reducer(state, action) {
  
  const  { name, searchValue }  = action.payload

  switch (action.type) {
    case ACTION_TYPES.LIKE_ITEM:
      return {
        ...state, clubs: state.clubs.map(club => {
          if (club.name == name) club.like = !club.like;
          return club;
        })
      }

    case ACTION_TYPES.FOLLOW_ITEM:
      return {
        ...state, clubs: state.clubs.map(club => {
          if (club.name == name) club.follow = !club.follow;
          return club;
        })
      }

    case ACTION_TYPES.SEARCH_LIST: {
      return {
        ...state, clubs: Data.filter(club => club.name.toUpperCase().includes(searchValue.toUpperCase()))
      }
    }
    default: return state;
  }
  
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  let followRef = useRef(null)
  let favouriteRef = useRef(null)
 
   useEffect(() => {
      const listener = (e) => {
        if (e.target.classList.contains("followHide") || e.target == followRef.current) {
          followRef.current.classList.remove("hidden")
        }
        else {
          followRef.current.classList.add("hidden");
        }
  
        if (e.target.classList.contains("favHide") || e.target == favouriteRef.current) {
          favouriteRef.current.classList.remove("hidden")
        }
        else {
          favouriteRef.current.classList.add("hidden")
        }
  
      }
     document.addEventListener("click", listener)

     return ()=>{
      document.removeEventListener("click",listener)
     }
   }, [])

  const likeClub = useCallback((name)=>{
    dispatch({
      type:ACTION_TYPES.LIKE_ITEM,
      payload:{
        name:name
      }
    })
  },[])

  const followClub = useCallback((name)=>{
    dispatch({
      type:ACTION_TYPES.FOLLOW_ITEM,
      payload:{
        name:name
      }
    })
  },[])
  const searchClubs = useCallback( (value)=>{
    dispatch({
      type:ACTION_TYPES.SEARCH_LIST,
      payload:{
        searchValue:value
      }
    })
  },[])

  return (
    <>
      <Menu
        searchClubs={searchClubs} 
        />
      <ClubList
        clubs = {state.clubs}
        likeClub ={likeClub}
        followClub={followClub}
        />
      <Favourites
        favouriteRef={favouriteRef}
        favourites={state.clubs.filter(club=>club.like)}
        likeClub = {likeClub}
         />
      <Follows
        followRef={followRef}
        follows={state.clubs.filter(club=>club.follow)}
        followClub= {followClub}
       /> 
    </>
  );
}

export default App


