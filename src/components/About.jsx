import profile_pic from '../assets/profile_pic.png'
import '../../src/About.css'
export default function About() {
    return (
        <>
            <div className="background-image">
                <img className="hero-text" src='/src/assets/hero_text.png'></img>
                <div className='pic-with-caption'>
                    <img className="profile-pic" src='/src/assets/contact_pic.jpeg'></img>
                    <h2 className='about-description'> 
                        I am a web and applications developer with a passion for both design and code :)
                    </h2>
                </div>
            </div>           
        </>
    )

}