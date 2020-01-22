import React from 'react';
import classes from './Pagination.module.css';

const Pagination = props => {

  let countPage = Math.ceil(props.totalCount/props.pageSize);

  let pages = [];

  if (countPage > 1) {
    for (let i=1; i <= countPage; i++) {
      pages.push(i)
    }
  }

    return (
          <ul className={classes.list}>
            {pages.map((p, index) => {
              return <li className={classes.page} key={index} onClick={() => props.onPageChanged(p)}>{p}</li>
            })}
          </ul>
        )
}

export default Pagination;