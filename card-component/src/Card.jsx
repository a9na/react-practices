import profilePic from './assets/profile.jpg'


function Card(){

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Ana</h2>
            <p className='card-text'>Im studying computer science and love running !</p>
        </div>
    );


}

export default Card