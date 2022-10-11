import { memo } from 'react';
import liked from './icons/liked.png'
import unLiked from './icons/unLiked.png'

function Club({name,img,like,follow ,likeClub,followClub}){
        console.log("rendered club");

        function likeHandle(){
            likeClub(name)
        }
        function handleFollow(){
            followClub(name)
        }
        return <div className='club'>
                    <h2>{name}</h2>
                    <img className='logo' src={img}/>
                    <div className="manageButtons">
                        <img className='LikeIcon' onClick={likeHandle}  src={like?liked:unLiked} alt="like" />
                        <div className='buttons'>
                            <button  className='followButton' onClick={handleFollow}>{follow ?"UNFOLLOW":"FOLLOW"}</button>
                        </div>
                    </div>
        </div>

      
}

export default memo(Club);