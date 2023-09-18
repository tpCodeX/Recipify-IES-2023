"use client"
import { iPaginationData } from "@/interfaces/paginationInterface"
import 'bulma/css/bulma.css'
import './Pagination.scss'

const Pagination = ({ recipesPerPage, currentPage, setCurrentPage, totalRecipes }: iPaginationData) => {

    const pageNumbers = []
    for (
        let i = 1;
        i <= Math.ceil(totalRecipes / recipesPerPage);
        i++
    ) {
        pageNumbers.push(i)
    }

    const handlePage = (page: number) => {
        setCurrentPage(page)
    }

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }


    return (

        <nav className="pagination is-centered is-large" role="navigation" aria-label="pagination">
            <button className="pagination-next" disabled={currentPage >= pageNumbers.length ? true : false} onClick={handleNextPage}>Siguiente</button>
            <button className="pagination-previous" disabled={currentPage === 1 ? true : false} onClick={handlePreviousPage}>Anterior</button>
            <ul className="pagination-list">
                {pageNumbers.map((numPage: number, index) => {
                    return (
                        <li key={index}>
                            <a className={`pagination-link ${numPage === currentPage ? 'is-current' : ""}`} onClick={() => handlePage(numPage)}>{numPage}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>

    )

}

export default Pagination