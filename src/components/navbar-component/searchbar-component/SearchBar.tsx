import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'
// import SearchItem from "./search-item-component/SearchItem";
const SearchBar = () => {


    return <div className="searchbar-container">
        <form className='navbar-form' action="POST">
            <input className='navbar-form-input' type="text" placeholder="Tomate, Ajo, Muzarella..." />
            <button className='navbar-form-submit' type="submit"><FontAwesomeIcon icon={faSearch} className='navbar-form-submit-icon' /></button>
        </form>
        {/* <SearchItem/> */}
        </div>

}

export default SearchBar