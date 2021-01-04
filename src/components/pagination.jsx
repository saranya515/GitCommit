import React from "react";

const Pagination = (props) => {
  const { currentPage } = props;
  const page = currentPage + 1;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li key={page} className="page-item active">
          <a className="page-link" onClick={() => props.onPageChange(page)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
