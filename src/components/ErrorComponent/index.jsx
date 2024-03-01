import { Link } from "react-router-dom"

function Error404() {
    return (
        <div className="errorWrapper">
            <p className="errorWrapper__404">
                404
            </p>
            <p className="errorWrapper__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="errorWrapper__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error404