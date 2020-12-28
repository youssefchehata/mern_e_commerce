import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <nav aria-label='...'>
        <ul class='pagination pagination-lg'>
          {[...Array(pages).keys()].map((el) => (
            <li className={el + 1 === page ? 'page-item active' : 'page-item '}>
              <Link
                key={el + 1}
                to={!isAdmin ?
                  !keyword
                    ? `/search/${keyword}/page/${el + 1}`
                    : `/page/${el + 1}` :
                    `/admin/productlist/${el+1}`
                }
              >
                <span class='page-link' active={el + 1 === page}>
                  {el + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Paginate;
