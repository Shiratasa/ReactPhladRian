import React from "react";

export const Pagination = ({ Page_AllPost, TotalPost }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(TotalPost / Page_AllPost); i++) {
    pageNum.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <div className="col-sm-1">
          <li>
            <a href>«</a>
          </li>
        </div>
        {pageNum.map((number) => (
          <div className="col-sm-1">
            <li key={number} className="page-block">
              <a href="!#" className="page-link">
                {number}
              </a>
            </li>
          </div>
        ))}
        <div className="col-sm-1">
          <li>
            <a href>»</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
