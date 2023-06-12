export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li className="projects-card">
                    <div> 
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
                    <div> 
                        <a href="https://youtu.be/_Tb1lKcswww" className="projects-title">GAEA Pulse Feedback Mobile and Web App - United
                        States Space Force</a>
                        <p>The capstone project for my Senior Design classes at the University
                            of Central Florida. The second iteration of a student lead project 
                            for the United States Space Force. Worked on with a team of 5 other 
                            students and designed with Figma. Implemented using React Native, 
                            MudBlazor, Azure, and CosmosDB. Senior Design 2023 Showcase can be 
                            found {" "}
                            <a href="https://www.cecs.ucf.edu/SeniorDesignShowcase/showcase/" className="here">here.</a>
                        </p>
                        <li className="projects-tags">react native</li>
                        <li className="projects-tags">mudblazor</li>
                        <li className="projects-tags">azure</li>
                        <li className="projects-tags">figma</li>
                        <li className="projects-tags">cosmosdb</li>                 
                    </div> 
                </li>
                <li className="projects-card">
                    <div>
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
        </>
    );
}
