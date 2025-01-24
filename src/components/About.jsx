import contact_pic from '../../src/assets/contact_pic.jpeg';
import hero_text from '../../src/assets/hero_text.png';
import '../../src/About.css';
export default function About() {
    return (
        <>
            <div>
                <div className='page-container'>
                    <div className='page-left'>
                        <img className="hero-text" src={hero_text}></img>
                        <img className="profile-pic" src={contact_pic} alt="profile-pic"></img>
                    </div>
                    <p className='about-description'>
                        I am a skilled web and applications developer with a strong passion for both design and programming. 
                        I hold a Bachelor's degree in Computer Science from the University of Central Florida, class of 2023, and
                        am currently pursuing my Master's Degree in Digital Forensics.
                        <br/> 
                        <br/> 
                        Although I initially enrolled as a Forensic Chemistry major, I discovered my true interests lay elsewhere 
                        and made the decision to pivot to Computer Science. This choice allowed me to explore my long-standing 
                        curiosity about coding, which soon became a field I deeply enjoy both learning and mastering.
                        In addition to programming, I have a creative side that drives my love for painting, digital art, web 
                        design, and video game development. My diverse skill set enables me to blend functionality with 
                        creativity in every project I undertake.
                    </p>
                </div>
            </div>
        </>
    )

}