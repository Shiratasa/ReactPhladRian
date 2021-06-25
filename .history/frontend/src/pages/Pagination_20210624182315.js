import React from 'react'

export const Pagination = (Page_AllPost, TotalPost) => {
    const pageNum = [];
    for(let i = 1; i <= Math.ceil(TotalPost/Page_AllPost); i++) {
        pageNum.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNum.map(number => (
                    <li key={number} className="page-block">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
