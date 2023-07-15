import profile_pic from '../assets/profile_pic.png'

export default function About() {
    return (
        <>
            <div className='content-wrapper'>
                <div className='text-container'>
                    <h1>Who am I?</h1>
                    <h2 className="about-section">
                        Hi! My name is Nicole.
                    </h2>
                    <p className="about-section">
                        I am a software engineer specializing in frontend development
                        and user interface design.
                    </p>
                </div>        
                <img src={profile_pic} alt="Profile" className='profile-pic'></img>
            </div> 
        </>
    )

}