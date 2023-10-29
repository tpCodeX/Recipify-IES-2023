import Link from 'next/link'

interface props{
    path:string,
    text:string
}

const LinkButton=(props:props)=>{
    return(
        <div className='w-[200px] h-[50px] bg-emerald-500 rounded-md m-auto mt-10 flex flex-col justify-center text-center'>
        <Link className='text-2xl' rel="stylesheet" href={props.path}>{props.text}</Link>
        </div>
    )
}

export default LinkButton;