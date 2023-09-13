import Image from 'next/image'
import logo from '../../../public/images/navbar-icon.svg'
import './NavBar.css'
import SearchBar from './searchbar-component/SearchBar'
import SigninButton from '../signinButton'


const NavBar = () => {
    return <nav className='navbar-container'>
        {/* <Image src="/images/coso.png" alt='recipify - logo' width={500} height={500}/> */}
        <Image src={logo} alt='Recipify - logo' className='navbar-logo'/>
        <SearchBar/>
        <SigninButton/>
    </nav>
}

export default NavBar