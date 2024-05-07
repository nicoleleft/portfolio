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
            {/*<button onClick={handleClick} className='contact-button'>Get in touch!</button>*/} 
        </> 
    );
}