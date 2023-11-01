import './landing.css'
import recipifyLogo from '../../../public/images/navbar-icon.svg'
import Image from 'next/image'

const LandingPage=()=>{

    return(
        <div className="w-screen h-[800px] fondo-landing flex justify-center items-center">
            <div className='sm:w-[1560px] h-[700px] fondo-transparente rounded-xl'>
                <div className='bg-zinc-500 rounded-t-xl'>
                <Image src={recipifyLogo} alt='Recipify Logo' className='m-auto colorLogo'></Image>
                </div>
            </div>
        </div>
    )
}

export default LandingPage