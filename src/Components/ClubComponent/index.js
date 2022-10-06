import liked from './icons/liked.png'
import unliked from './icons/unliked.png'

function Club({name,img,like,follow ,likeHandle ,followHandle ,deleteHandle}){


        return <div className='club'>
                    <h2>{name}</h2>
                    <img className='logo' src={img}/>
                    <div className="manageButtons">
                        <img className='LikeIcon' onClick={()=>{likeHandle(name)}} src={like?liked:unliked} alt="like" />
                        <div className='buttons'>
                            <button onClick={()=>{followHandle(name)}} className='followButton'>{follow ?"UNFOLLOW":"FOLLOW"}</button>
                            <button onClick={()=>{deleteHandle(name)}}>DELETE</button>
                        </div>
                    </div>
        </div>

      
}

export default Club;