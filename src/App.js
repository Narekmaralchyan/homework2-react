import { useEffect, useRef, useState } from 'react';
import './App.css';
import ClubList from './Components/ClubList';
import Data from './Components/ClubList/data.json'
import Menu from './Components/Menu';
import Favourites from './Components/Favourites';
import Follows from './Components/Follows';

function App() {
  const [searchValue, setSearchValue] = useState("")
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
  }
  return (
    <>
      <Menu 
          showFavourites={showFavourites} 
          showFollows={showFollows} 
          searchItem={searchItem} />
      <ClubList 
          searchValue={searchValue} 
          handleFollows={handleFollows} 
          handleFavourites={handleFavourites} />
      <Favourites 
          favouriteRef={favouriteRef} 
          showFavourites={showFavourites} 
          unlike={unlike} 
          favourites={favourites} />
      <Follows 
          followRef={followRef} 
          showFollows={showFollows} 
          unfollow={unfollow} 
          follows={follows} />
    </>
  );
}

export default App;


