import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="headerNav">
            <Link className="headerNav__link" to='/'>
                Accueil
            </Link>
            <Link className="headerNav__link" to='/about'>
                A Propos
            </Link>
        </nav>
    )
}

export default Nav