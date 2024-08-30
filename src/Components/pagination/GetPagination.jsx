import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

const GetPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;

  const [data, setData] = useState([]);

  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(POSTS_URL).then(res => {
      return res.json()
    }).then((data) => {
      setData([...data])
    }).catch(err => {
      return err.message;
    })
  }, [])

  const totalPages = Math.ceil(data.length / dataPerPage);

  const currentData = data.slice(
    (currentPage - 1) * dataPerPage,
    currentPage * dataPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <h1>Paginated Data</h1>
      <ul>
        {currentData.map(({id, title, }, index) => (
          <li key={id}>{id}--{title}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default GetPagination