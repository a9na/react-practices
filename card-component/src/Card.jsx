import profilePic from './assets/profile.jpg'


function Card(){

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>Ana</h2>
            <p>Im studying computer science and love running !</p>
        </div>
    );


}

export default Card