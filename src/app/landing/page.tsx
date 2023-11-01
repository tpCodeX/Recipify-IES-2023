import './landing.css'
import recipifyLogo from '../../../public/images/navbar-icon-black.svg'
import Image from 'next/image'
import { titleFont } from '../layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {

    return (
        <div className="w-screen h-fit sm:h-[1000px] fondo-landing flex justify-center sm:items-center pb-5">
            <div className='w-[370px] sm:w-[1560px] h-fit sm:h-[830px] fondo-transparente rounded-xl mt-10 sm:mt-0 p-3 shadow-2xl'>
                <Image src={recipifyLogo} alt='Recipify Logo' className='m-auto colorLogo'></Image>
                <div className={"text-center text-teal-950 "+titleFont.className}>
                    <h1 className='text-3xl sm:text-5xl'>¡Comenzá tu viaje gastronómico!</h1>
                    <h2 className='text-xl sm:text-3xl' >Sé parte de la comunidad de cocineros más copada de Internet.</h2>
                </div>
                <div className={'cursor-pointer rounded-2xl sm:hidden fondo-transparente-verde-boton text-white text-center h-[60px] w-[300px] m-auto mt-5 p-3 '+titleFont.className}>
                     <span className='text-[25px]'>Registrate Ahora</span> <FontAwesomeIcon className='ml-4 text-[25px]' icon={faArrowRightToBracket} />
                </div>
                <div className={`flex flex-col sm:flex-row gap-5 p-3 text-zinc-900 fondo-transparente-verde mt-5 rounded-xl shadow-xl text-lg sm:text-xl`}>
                    <div className='w-full sm:w-1/4 p-3 rounded-xl gap-3 flex flex-col text-center  '>
                        <h3 className={'text-3xl '+titleFont.className}> Recetas <br /> para todos los gustos</h3>
                        <div>
                            <p>
                                Explorá una amplia variedad de recetas.
                            </p>
                            <p>
                                Desde platos tradicionales hasta opciones vegetarianas y saludables.
                            </p>
                        </div>
                        <p className='font-semibold'>
                            ¡Tenemos algo para cada paladar!
                        </p>
                    </div>
                    <div className='w-full sm:w-1/4 p-3 rounded-lg  gap-3 flex flex-col text-center '>
                        <h3 className={'text-3xl '+titleFont.className}>Búsqueda Fácil y Rápida</h3>
                        <div>
                            <p>
                                Nuestra potente herramienta de búsqueda te permite encontrar recetas por ingredientes, tipo de cocina o categorías.
                            </p>
                        </div>
                        <p className='font-semibold'>
                            ¡Encontrá la comida perfecta en segundos!
                        </p>
                    </div>
                    <div className='w-full sm:w-1/4 p-3 rounded-lg  gap-3 flex flex-col text-center'>
                        <h3 className={'text-3xl '+titleFont.className}>Guardá Tus Favoritas</h3>
                        <p>
                            Marcá tus recetas favoritas y creá tu propia colección personalizada.
                        </p>
                        <p className='font-semibold'>
                            ¡Sorprendé a todos!
                        </p>
                    </div>
                    <div className='w-full sm:w-1/4 p-3 rounded-lg gap-3 flex flex-col text-center '>
                        <h3 className={'text-3xl '+titleFont.className}>Compartí tus conocimientos</h3>
                        <p>
                            En Recipify, queremos crear una extensa comunidad de cocineros.
                        </p>
                        <p>
                            Compartí tus recetas, técnicas y conocimientos culinarios con otros cocineros al rededor del mundo.
                        </p>
                        <p className='font-semibold'>
                            ¡Subí tu receta!
                        </p>
                    </div>
                </div>
                <div className={'cursor-pointer rounded-2xl hidden sm:block fondo-transparente-verde-boton text-white text-center h-[80px] w-[450px] m-auto mt-5 p-3 '+titleFont.className}>
                     <span className='text-[38px]'>Registrate Ahora</span> <FontAwesomeIcon className='ml-4 text-[39px]' icon={faArrowRightToBracket} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage