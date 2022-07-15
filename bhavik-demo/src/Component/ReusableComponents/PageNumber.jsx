import React from 'react'

const PageNumber = ({ TotalPageNumber, CurrentPageNumber }) => {
    return (
        <div className="mx-3 my-3">
            {CurrentPageNumber} Otu Of {TotalPageNumber}
        </div>
    )
}

export default PageNumber