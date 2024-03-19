import Link from 'next/link'
const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <span className="navbar-brand">Portafolio Profesional</span> 
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link href="/blog">  
                            <span className="nav-link">Blog</span> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/github"> 
                            <span className="nav-link">Github</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar;
