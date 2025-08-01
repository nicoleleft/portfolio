export default function Projects() {
    return (
        <>
            <div id="projects">
                <h2>projects</h2>
                <div id="pomo" className="projects-container">
                    <h4 className="tech-used" style={{fontStyle: "italic", marginRight: "30px"}}>
                         <span style={{textDecoration: "underline"}}>Technologies Used:</span> Javascript, React.js, JSX, CSS, Node.js, Vite, Netlify ,Figma
                    </h4>
                    <ul className="projects-card">
                        <h3 style={{textDecoration: "underline"}}>Perfect Pomo React Web App, July 2025</h3>
                        <li>
                              Designed in Figma and developed using React.js                      
                        </li>
                        <li>
                              My version of a perfect pomodoro timer, allows the user to change the background by uploading their own background image, including gifs.                      
                        </li>
                        <li>
                              Timers are customizable to any configuration of short and long breaks.                 
                        </li>
                        <li>
                              Loaded with custom presets of backgrounds for the user.                     
                        </li>
                        <li>
                             Link: <a href='https://perfectpomo.netlify.app/'>https://perfectpomo.netlify.app/</a>
                        </li>
                    </ul>
                    
                </div>
                <div id="react-refresher" className="projects-container">
                    <ul className="projects-card">
                        <h3 style={{textDecoration: "underline"}}>REACT Refresher Website, Feb 2024 – Feb 2025</h3>
                        <li>
                            Developed using C#, .NET, Microsoft SQL Server Management Studio
                        </li>
                        <li>
                            Designed and implemented user interface in Figma and built using HTML, CSS, Javascript, and ASP.NET
                        </li>
                        <li>
                            Designed data analytics dashboard for the admin view of the site to visualize user demographics.
                        </li>
                        <li>
                            Developed pdf certificate parsing methods to match existing users with their respective course certificates.
                        </li>
                        <li>
                            Developed methods to save user information to respective database tables to allow for our other site to grab information from this site.
                        </li>
                        <li>
                            Distributed to over 2,000 REACT users and 10+ Admins. 
                        </li>
                        
                    </ul>
                    <h4 className="tech-used" style={{fontStyle: "italic"}}>
                         <span style={{textDecoration: "underline"}}>Technologies Used:</span> C#, .NET 4.8, Microsoft SSMS, Azure, HTML, Javascript, CSS, ASP.NET, Figma, GitHub
                    </h4>
                </div>
                <div id="restful-journey" className="projects-container">
                <h4 className="tech-used" style={{fontStyle: "italic", marginRight: "30px"}}>
                         <span style={{textDecoration: "underline"}}>Technologies Used:</span> Unity, C#, Xcode, Android Studio, GitHub
                    </h4>
                    <ul className="projects-card" style={{marginRight: "0"}}>
                        <h3 style={{textDecoration: "underline"}}>Restful Journey Mobile App (iOS & Android), Aug 2023 – Sept 2024</h3>
                        <li>
                            Inherited and enhanced legacy code to add data collection functionalities using Unity C# for research purposes.                        
                        </li>
                        <li>
                            Successfully published the application to both the App Store and Google Play Store, engaging over 50 participants in a sleep study for UCF RESTORES.                        
                        </li>
                        <li>
                            Authored a comprehensive 20-page documentation to guide researchers in data collection with Unity Cloud and assist future developers in application modifications.                        
                        </li>
                        <li>
                            Provide ongoing maintenance and bug fixes to ensure compliance with Google Play Store and App Store requirements                        
                        </li>
                        <li>
                            Distributed to over 2,000 REACT users and 10+ Admins. 
                        </li>
                        
                    </ul>
                    
                </div>
                
            </div>
        </>
    );
}
