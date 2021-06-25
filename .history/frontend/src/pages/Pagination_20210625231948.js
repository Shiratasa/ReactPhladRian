/* eslint-disable */
import React, { useState } from "react";

export const Pagination = ({
  Page_AllPost,
  TotalPost,
  Current_Page,
  paginate,
  ItemCount,
}) => {
  const pageNum = [];
  const [Page_Limit, setPage_Limit] = useState(5);
  const [minPage_Limit, setminPage_Limit] = useState(0);
  const [maxPage_Limit, setmaxPage_Limit] = useState(5);

  function prevClick() {
    if (Current_Page > 1) {
      paginate(Current_Page - 1);
    }
  }

  function nextClick() {
    if (Current_Page < ItemCount) {
      paginate(Current_Page + 1);
    }
  }

  function minusShow() {
    paginate(Current_Page + 1);
    if ((Current_Page - 1) % Page_Limit == 0) {
      setmaxPage_Limit(maxPage_Limit - Page_Limit);
      setminPage_Limit(minPage_Limit - Page_Limit);
    }
  }

  function plusShow() {
    paginate(Current_Page + 1);
    if (Current_Page + 1 > maxPage_Limit) {
      setmaxPage_Limit(maxPage_Limit + Page_Limit);
      setminPage_Limit(minPage_Limit + Page_Limit);
    }
  }

  let DecreTab = null;
  if (minPage_Limit >= 1) {
    DecreTab = (
      <div className="col-sm-1">
        <li
          onClick={() => {
            minusShow();
          }}
        >
          <a>...</a>
        </li>
      </div>
    );
  }

  let IncreTab = null;
  if (ItemCount > maxPage_Limit) {
    IncreTab = (
      <div className="col-sm-1">
        <li
          onClick={() => {
            plusShow();
          }}
        >
          <a>...</a>
        </li>
      </div>
    );
  }

  for (let i = 1; i <= Math.ceil(TotalPost / Page_AllPost); i++) {
    pageNum.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <div className="col-sm-1">
          <li id="prev">
            <a
              onClick={() => {
                prevClick();
              }}
            >
              «
            </a>
          </li>
        </div>
        {DecreTab}

        {pageNum.map((number) => {
          if (number < maxPage_Limit + 1 && number > minPage_Limit) {
            return (
              <div className="col-sm-1">
                <li
                  key={number}
                  id={number}
                  className={Current_Page === number ? "active" : ""}
                >
                  <a onClick={() => paginate(number)}>{number}</a>
                </li>
              </div>
            );
          } else {
            return null;
          }
        })}

        {IncreTab}
        <div className="col-sm-1">
          <li id="next">
            <a
              onClick={() => {
                nextClick();
              }}
            >
              »
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
