import Layaut from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";


const Index = () => (

    <Layaut>

        {/** tarjeta Header */}
        <header className="row">
            <div className="col-m2-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <img
                                src="/perfil.jpg"
                                alt="Javier Alfonso Morán Rodríguez profile picture"
                                className="img-fluid align-self-center"
                                style={{ maxWidth: "50%" }}
                            />
                        </div>
                        <div className="col-md-8">
                            <h1>Javier Alfonso Morán Rodríguez</h1>
                            <h3>FullStack Developer</h3>
                            <p>Support TI And Developer: Java, C#, Python, HTML, CSS, JS, SQL Server, MySQL, MongoDB, PHP, RAZOR. ASP.NET, Node.js, Angular, Joomla, WordPress, Moodle.</p>
                            <a href="/Hire me">Contrátame</a>
                        </div>

                    </div>
                </div>
            </div>

        </header>

        {/** Segunda Secciòn */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-ligth">
                    <div className="card-body">
                        <h1>skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experiences">
                            <span className="btn btn-light">Conoce mas</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/**  Secciòn portafolio*/}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portafolio</h1>
                        </div>
                        {
                            projects.map(({name,description,image}, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img
                                                src={`/${image}`}
                                                alt="profile picture"
                                                className="card-img-top"
                                                style={{ maxWidth: "100%" }}
                                            />
                                        </div>
                                        <div className="card body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Saber más</a>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                    <div className="text-center mt-4">
                        <Link href="/portfolio">
                            <span className="btn btn-outline-light">Otros Proyectos</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </Layaut >
)
export default Index;