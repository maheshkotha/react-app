import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={styles.pagination}>
        <li
          style={currentPage === 1 ? styles.disabled : styles.pageItem}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            style={currentPage === number ? styles.active : styles.pageItem}
            onClick={() => onPageChange(number)}
          >
            {number}
          </li>
        ))}
        <li
          style={currentPage === totalPages ? styles.disabled : styles.pageItem}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    justifyContent: 'center',
  },
  pageItem: {
    margin: '0 5px',
    padding: '8px 12px',
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '4px',
    color: '#007BFF',
    backgroundColor: '#fff',
  },
  active: {
    margin: '0 5px',
    padding: '8px 12px',
    cursor: 'pointer',
    border: '1px solid #007BFF',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#007BFF',
  },
  disabled: {
    margin: '0 5px',
    padding: '8px 12px',
    color: '#ddd',
    cursor: 'not-allowed',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
};

export default Pagination;
