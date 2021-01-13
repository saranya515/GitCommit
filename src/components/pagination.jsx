import React from "react";

const Pagination = (props) => {
  const { currentPage, prevCommits } = props;
  const page = currentPage + 1;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => props.onPrevPage(prevCommits, currentPage)}
          >
            Previous
          </a>
        </li>
        <li key={page} className="page-item active">
          <a
            className="page-link"
            onClick={() => props.onPageChange(prevCommits, page)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
