import Logo from '../../assets/LOGO.svg'
import Nav from '../Nav'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='headerWrapper'>
            <figure className='headerWrapper__fig'>
            <Link to="/">
                    <img src={Logo} alt='Logo de Kasa' />
                </Link>
            </figure>
            <Nav />
        </header>
    )
}

export default Header