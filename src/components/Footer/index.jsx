import FooterLogo from '../../assets/logo-footer.svg'

function Footer() {
    return (
        <footer className='footerWrapper'>
            <figure className='footerWrapper__fig'>
                <img src={FooterLogo} alt='Logo de Kasa' />
            </figure>
            <p className='footerWrapper__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer