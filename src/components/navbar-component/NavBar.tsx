'use client'
import logo from '../../../public/images/navbar-icon.svg'
import logoMobile from '../../../public/images/iconito.png'
import './NavBar.css'
import {Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import Image from 'next/image'
import SearchBar from './searchbar-component/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SignInButton from '../botonSignin/SigninButton'

// import MenuList from './menu-list/MenuList'


const NavBar = () => {

    

    return (
        <div className='w-screen h-16 sm:h-20 flex items-center justify-evenly p-2 sm:p-0 bg-emerald-400 overflow-hidden md:gap-3' >
            <div className=' overflow-hidden md:min-w-[200px]'>
                    <Image src={logo} alt="logo-recipify"  className='hidden pt-2 sm:pt-0 sm:block logo-mobile' width={250} priority={true}/>
                    <Image src={logoMobile} alt="logo-recipify"  className='block sm:hidden logo-mobile' width={70} priority/>
            </div>
            
        <SearchBar className="items-center mr-2 ml-2 sm:mr-2 sm:ml-0 sm:w-[400px] md:min-w-[450px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] "></SearchBar>
            
            <Dropdown className='' placement='bottom-end'>
                    <DropdownTrigger className='w-[30px] sm:w-[40px] cursor-pointer sm:mr-2 md:mr-2'>
                            <FontAwesomeIcon icon={faBars} className='text-[35px] text-[#02020294]' />
                    </DropdownTrigger>
                    <DropdownMenu  aria-label="Menu Actions" variant="faded">
                        <DropdownItem key="LogIn/LogOut" className="h-14 gap-3">
                            <SignInButton inString='Iniciar Sesión' outString='Cerrar Sesión'/>
                        </DropdownItem>
                        <DropdownItem key="recetas"><Link >Recetas</Link></DropdownItem>
                        <DropdownItem key="contact"><Link>Contáctanos</Link></DropdownItem>
                        <DropdownItem key="about"><Link>Sobre Nosotros</Link></DropdownItem>
                        <DropdownItem key="help_and_feedback"><Link>Ayuda & Feedback</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
        </div>
    )
}
{/* <Image src={menuIcon} alt='' className='menu-icon' priority={true} /> */ }

export default NavBar