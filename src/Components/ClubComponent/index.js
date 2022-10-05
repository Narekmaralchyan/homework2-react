import liked from './icons/liked.png'
import unliked from './icons/unliked.png'

function Club({name,img,like,follow}){


        return <div className='club'>
          <h3>{name}</h3>
          <img className='logo' src={img}/>
          <div className="manageButtons">
            <img className='LikeIcon' src={like?liked:unliked} alt="like" />
            <div className='buttons'>
                <button className='followButton'>{follow ?"UNFOLLOW":"FOLLOW"}</button>
                <button>DELETE</button>
            </div>
          </div>
        </div>

      
}

export default Club;