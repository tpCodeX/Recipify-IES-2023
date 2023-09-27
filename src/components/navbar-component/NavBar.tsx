'use client'
import logo from '../../../public/images/navbar-icon.svg'
import logoMobile from '../../../public/images/iconito.png'
import menuIcon from '../../../public/images/menu-icon.svg'
import './NavBar.css'
import {Link, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import Image from 'next/image'
// import MenuList from './menu-list/MenuList'

import { SearchIcon } from './SearchIcon'


const NavBar = () => {

    const handleClear = () => {
        alert("que haces")
    };

    return (
        <div className='w-screen h-16 sm:h-20 flex items-center justify-evenly p-2 sm:p-0 bg-emerald-400 overflow-hidden' >
            <div className=' overflow-hidden'>
                    <Image src={logo} alt="logo-recipify"  className='hidden pt-2 sm:pt-0 sm:block' width={250} />
                    <Image src={logoMobile} alt="logo-recipify"  className='block sm:hidden logo-mobile' width={70} />
            </div>
            <search>

            <form method='GET' action={"https://google.com/"} className="items-center lg:w-[800px] mr-2 ml-2 sm:mr-0 sm:ml-0">
                <Input
                    onSubmit={()=>console.log("ola k ase")}
                    onClear={handleClear}
                    classNames={{
                        base: "max-w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-white dark:bg-default-500/20",
                    }}
                    placeholder="Busca una receta..."
                    size="md"
                    startContent={<button type='submit'><SearchIcon size={18} width={18} height={18} /></button>}
                    type="search"
                    />
                

            </form>
            </search>

            
            <Dropdown className='' placement='bottom-end'>
                    <DropdownTrigger className='w-[30px] sm:w-[40px] cursor-pointer'>
                            <Image src={menuIcon} alt='Menu-Icon' width={50} height={50} ></Image>
                    </DropdownTrigger>
                    <DropdownMenu  aria-label="Menu Actions" variant="faded">
                        <DropdownItem key="LogIn/LogOut" className="h-14 gap-3">
                            <p className="font-semibold">Ingresar</p>
                        </DropdownItem>
                        <DropdownItem key="recetas"><Link>Recetas</Link></DropdownItem>
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