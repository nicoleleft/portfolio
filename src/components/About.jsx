import contact_pic from '../../src/assets/contact_pic.jpeg';
import hero_text from '../../src/assets/hero_text.png';
import '../../src/About.css';
export default function About() {
    return (
        <>
            <div className="background-image">
                <img className="hero-text" src={hero_text}></img>
                <div className='pic-with-caption'>
                    <img className="profile-pic" src={contact_pic} alt="profile-pic"></img>
                    <div className='about-text'>
                        <h2 className='about-intro'> 
                            I am a web and applications developer with a passion for both design and code :)
                        </h2>
                        <p className='about-description'>
                            Howdy hey! My name is Nicole. I graduated from the University of Central Florida in 2023 with 
                            a Bachelor's degree in Computer Science. When I came to UCF, I didn't know I was going to love
                            programming. I applied as a forensic chemistry major and decided to change to undecided engineering
                            *at orientation* when I felt in my bones that my passions lied elsewhere. After not too long, I 
                            landed on Computer Science since I had always wanted to learn how to code, so why not? Lo and behold, 
                            programming quickly became my favorite thing to learn about and practice.
                            <br></br>
                            <br></br>
                            Along with programming, I love to paint, create digital art, design websites and other digital assets,
                            and make video games! 
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </>
    )

}