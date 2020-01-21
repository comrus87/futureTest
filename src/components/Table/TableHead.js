import React from 'react';
import classes from './TableHead.module.css';

const TableHead = props => {
	return (
	    <thead>
	      <tr className={classes.row}>
	        <th className={classes.cell}>id</th>
	        <th className={classes.cell}>firstName</th>
	        <th className={classes.cell}>lastName</th>
	        <th className={classes.cell}>email</th>
	        <th className={classes.cell}>phone</th>
	      </tr>
	    </thead>
	)
}

export default TableHead