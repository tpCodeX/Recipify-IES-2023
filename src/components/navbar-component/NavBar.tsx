import Image from 'next/image'
import logo from '../../../public/images/navbar-icon.svg'
import './NavBar.css'
import SearchBar from './searchbar-component/SearchBar'


const NavBar = () => {
    return <nav className='flex flex-row h-28 bg-lime-400 justify-between items-center w-full sticky-navbar'>
        <Image src={logo} alt='Recipify - logo' className='navbar-logo' priority={true}/>
        <SearchBar/>
    </nav>
}

export default NavBar