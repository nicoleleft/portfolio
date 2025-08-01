import contact_pic from '../assets/contact_pic.svg'

export default function Contact() {

    const handleClick = () => {
        const emailAddress = 'wrightnicole2@yahoo.com';
        const subject = '';
        const body = '';
    
        const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoURL;
      };
    
    return (
        <>
        <div className='contact'>
            <h2>contact</h2>
        </div>
        <div className='contact-card'>
            <p>Thank you so much for taking the time to make it this far! If you have any 
                inquiries please feel free to send me an email with the button below. Don't forget to also check out my
                LinkedIn and GitHub! </p>
            {<button onClick={handleClick} className='contact-button'>Get in touch!</button>} 
        </div>
           <br></br> 
           <br></br>
            
        </> 
    );
}