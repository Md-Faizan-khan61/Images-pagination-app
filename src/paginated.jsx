import React, { useState } from "react";
import './App.css'

const Paginated = ({ images, imagePerPage }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = images.length / imagePerPage;
    const handlePage = (pageNumber) => {
     setCurrentPage(pageNumber)           
    }

    const indexOfLast = imagePerPage * currentPage
    const indexOfFirst = indexOfLast - imagePerPage
    const currentImage = images.slice(indexOfFirst, indexOfLast)

    return (
    <div> 
       { currentImage.map((image, i) =>
            <img key={i} src={image.src} />
        )}
        <div className="butn">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page,index)=>(
          <button key={index} 
          onClick={()=>handlePage(page)}
          disabled={currentPage === page}
          >{page}</button>
        ))}                    
        </div>
    </div>   
    
    )
}

export default Paginated