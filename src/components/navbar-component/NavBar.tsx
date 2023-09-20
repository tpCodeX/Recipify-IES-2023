import Image from 'next/image'
import logo from '../../../public/images/navbar-icon.svg'
import './NavBar.css'
import SearchBar from './searchbar-component/SearchBar'
import SigninButton from '../botonSignin/signinButton'
import Link from 'next/link'



const NavBar = () => {
    //para q no vaya al login sin el navbar
    // const isUserPostPage = typeof window !== 'undefined' && window.location.pathname === '/';
    return <nav className='navbar-container'>
        {/* <Image src="/images/coso.png" alt='recipify - logo' width={500} height={500}/> */}
        <Image src={logo} alt='Recipify - logo' className='navbar-logo'/>
        <SearchBar/>
        <Link style={{color: 'white'}}href={"/dashboard"}>usuarios</Link>
        <Link style={{color: 'white'}}href={"/userPost"}>Recetas</Link>
        {/* {isUserPostPage && <Link style={{color: 'white'}}href={"/userPost"}>Recetas</Link> } */}
        <SigninButton />
    </nav>
}

export default NavBar