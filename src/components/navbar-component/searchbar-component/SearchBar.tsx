// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@nextui-org/react'
import './SearchBar.css'
import { SearchIcon } from '../SearchIcon'
// import { useState } from 'react'
const SearchBar = ({className}:{className:string}) => {
    // const [search,setSearch]=useState("")

    const handleSubmit = () => {

    }

    
    return (
        <search>

            <form onSubmit={handleSubmit} className={className}>
                <Input
                    onClear={()=>alert("clear vite'")}
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
    )



}

export default SearchBar