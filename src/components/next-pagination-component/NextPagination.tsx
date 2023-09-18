import { iPaginationData } from "@/interfaces/paginationInterface";
import { Pagination, PaginationCursor, PaginationCursorProps } from "@nextui-org/react";
export default function NextPagination({totalRecipes,recipesPerPage}:iPaginationData) {
 
  const pageNumbers= []
    for (
        let i = 1;
        i <= Math.ceil(totalRecipes / recipesPerPage);
        i++
    ) {
        pageNumbers.push(i)
    }

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Pagination
        showShadow
        radius="lg"
        loop
        total={3}
        initialPage={1}
        size="lg"
        color="success"
        variant={"bordered"}
        showControls
        // onChange={}
      ></Pagination>
    </div>
  )
}