import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ClubList from './Components/ClubList';
import Data from './Components/ClubList/data.json'
import Menu from './Components/Menu';
import Favourites from './Components/Favourites';
import Follows from './Components/Follows';

const ACTION_TYPES = {
  LIKE_ITEM: "likeItem",
  FOLLOW_ITEM: "FollowItem",
  DELETE_ITEM: "DeleteItem",
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
  /*  const [searchValue, setSearchValue] = useState("")
   const [favourites, setFavourites] = useState([])
   const [follows, setFollows] = useState([])
   let followRef = useRef(null)
   let favouriteRef = useRef(null)
 
   useEffect(() => {
     document.addEventListener("click", (e) => {
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
 
     })
   }, [])
 
   function handleFavourites(data) {
     setFavourites(data)
   }
 
   function unlike(name) {
     setFavourites(favourites.filter(club => {
       if (club.name == name) {
         club.like = false;
         return false;
       }
       else return true;
     }))
   }
 
   function handleFollows(data) {
     setFollows(data)
   }
 
   function unfollow(name) {
     setFollows(follows.filter(club => {
       if (club.name == name) {
         club.follow = false;
         return false;
       }
       else return true;
     }))
   }
 
   function searchItem(value) {
     setSearchValue(value)
   }
   function showFavourites() {
     favouriteRef.current.classList.toggle("hidden")
   }
   function showFollows() {
     followRef.current.classList.toggle("hidden")
   } */

  const [state, dispatch] = useReducer(reducer, initialState)

  function searchClubs(clubName){
    dispatch({
      type:ACTION_TYPES.SEARCH_LIST,
      payload:{
        searchValue:clubName,
      }
    })
  }
  return (
    <>
      <Menu
        // showFavourites={showFavourites}
        // showFollows={showFollows}
        // searchClubs={searchClubs} 
        />
      <ClubList
        clubs = {state.clubs}
        // handleFollows={handleFollows}
        // handleFavourites={handleFavourites} 
        />
       {/* <Favourites
        favouriteRef={favouriteRef}
        showFavourites={showFavourites}
        unlike={unlike}
        favourites={favourites} />
      <Follows
        followRef={followRef}
        showFollows={showFollows}
        unfollow={unfollow}
        follows={follows} />  */}
    </>
  );
}

export default App


