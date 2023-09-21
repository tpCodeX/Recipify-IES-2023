import Image from 'next/image'
import logo from '../../../public/images/navbar-icon.svg'
import './NavBar.css'
import SearchBar from './searchbar-component/SearchBar'
import SigninButton from '../botonSignin/signinButton'
import Link from 'next/link'
import { getServerSession } from "next-auth";



async function NavBar() {
    const session = await getServerSession();
    //para q no vaya al login sin el navbar
    // const isUserPostPage = typeof window !== 'undefined' && window.location.pathname === '/';
    return <nav className='navbar-container'>
         <Image src={logo} alt='Recipify - logo' className='navbar-logo'/>
        <SearchBar/>
        <SigninButton />
    </nav>
}

export default NavBar