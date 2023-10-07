import contact_pic from '../assets/contact_pic.svg'

export default function Contact() {

    const handleClick = () => {
        const emailAddress = 'wrightnicole222@gmail.com';
        const subject = '';
        const body = '';
    
        const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoURL;
      };
    
    return (
        <>
            <h1>Contact Me</h1>
            <div className='contact-container'>
                <img src={contact_pic} alt='contact_pic' className='contact-pic'></img>
                <div className='contact-right-container'>
                    <p className="contact-right">
                        Feel free to send me any business inquiries and I will get 
                        back to you as soon as possible.   
                    </p>
                    <button onClick={handleClick} className='contact-button'>Get in touch!</button>
                </div>           
            </div>   
        </> 
    );
}