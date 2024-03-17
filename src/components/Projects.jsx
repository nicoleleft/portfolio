export default function Projects() {
    return (
        <>
            <div className="container">
                <h1>Projects</h1>
                <ul className="fix-padding">
                    <li className="projects-card">
                        <div className="card-padding-inside"> 
                            <a className="projects-title">Portfolio Website</a>
                            <p>The website you're on right now! Designed using Figma
                                and implemented using React.js, CSS style sheets, and hosted 
                                using Netlify.
                            </p>
                            <li className="projects-tags">react</li>
                            <li className="projects-tags">css</li>
                            <li className="projects-tags">netlify</li>
                            <li className="projects-tags">figma</li>
                        </div> 
                    </li>
                    <li className="projects-card">
                        <div className="card-padding-inside"> 
                            <a href="https://youtu.be/_Tb1lKcswww" className="projects-title">GAEA Pulse Feedback Mobile and Web App - United
                            States Space Force</a>
                            <p>The capstone project for my Senior Design classes at the University
                                of Central Florida. The second iteration of a student lead project 
                                for the United States Space Force. Worked on with a team of 5 other 
                                students and designed with Figma. Implemented using React Native, 
                                MudBlazor, Azure, and CosmosDB. Senior Design 2023 Showcase can be 
                                found {" "}
                                <a href="https://www.cecs.ucf.edu/SeniorDesignShowcase/showcase/" className="here">here</a>
                                .
                            </p>
                            <li className="projects-tags">react native</li>
                            <li className="projects-tags">mudblazor</li>
                            <li className="projects-tags">azure</li>
                            <li className="projects-tags">figma</li>
                            <li className="projects-tags">cosmosdb</li>                 
                        </div> 
                    </li>
                    <li className="projects-card">
                        <div className="card-padding-inside"> 
                            <a href="https://youtu.be/2yn9weoGpfM?t=12813" className="projects-title">Twilight Forest VR Game for Oculus Quest 2</a>
                            <p>
                                Lead user interface design and level design for a virtual reality bow and arrow puzzle solving 
                                game for my AI for Game Programming class project with a team of three other people. Designed 
                                main menu screen, user interface in-game, as well as the environment with puzzle design kept in mind. 
                                Utilized wireframing, Unity user interface tools, interactive prototyping, storyboarding, and performed 
                                user testing.
                            </p>
                            <li className="projects-tags">unity</li>
                            <li className="projects-tags">css</li>
                            <li className="projects-tags">figma</li>                
                        </div> 
                    </li>
                    <li className="projects-card">
                        <div className="card-padding-inside">
                            <a className="projects-title">Odoo 15 Plant Care App Module</a>
                            <p> Developed a plant care application module in Odoo 15. Developed 
                                using Python, Odoo 15, and XML. Utilizes relational database 
                                concepts such as many2many and one2many relationships. Code base 
                                for this project can be found in my GitHub linked in the navigation
                                bar above.
                            </p>
                            <li className="projects-tags">odoo 15</li>
                            <li className="projects-tags">python</li>
                            <li className="projects-tags">xml</li>
                            <li className="projects-tags">postgresql</li>  
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
