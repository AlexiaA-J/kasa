import Logo from '../../assets/LOGO.svg'
import Nav from '../Nav'

function Header() {
    return (
        <header className='headerWrapper'>
            <figure className='headerWrapper__fig'>
                <img src={Logo} alt='Logo de Kasa' />
            </figure>
            <Nav />
        </header>
    )
}

export default Header