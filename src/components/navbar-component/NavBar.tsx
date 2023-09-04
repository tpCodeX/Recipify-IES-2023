import Image from 'next/image'
import logo from '../../../public/images/navbar-icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'


const NavBar = () => {
    return <nav className='navbar-container'>
        {/* <Image src="/images/coso.png" alt='recipify - logo' width={500} height={500}/> */}
        <Image src={logo} alt='Recipify - logo' className='navbar-logo'/>
        <form className='navbar-form' action="POST">
            <input className='navbar-form-input' type="text" placeholder="Tomate, Ajo, Muzarella..." />
            <button className='navbar-form-submit' type="submit"><FontAwesomeIcon icon={faSearch} className='navbar-form-submit-icon'/></button>
        </form>
    </nav>
}

export default NavBar