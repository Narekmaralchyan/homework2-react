import liked from './icons/liked.png'
import unliked from './icons/unliked.png'

function Club({name,img,like,follow ,likeHandle}){


        return <div className='club'>
                    <h2>{name}</h2>
                    <img className='logo' src={img}/>
                    <div className="manageButtons">
                        <img className='LikeIcon'  src={like?liked:unliked} alt="like" />
                        <div className='buttons'>
                            <button  className='followButton'>{follow ?"UNFOLLOW":"FOLLOW"}</button>
                        </div>
                    </div>
        </div>

      
}

export default Club;