import React from 'react';
import classes from './TableItem.module.css';

const TableItem = props => {
	return (
	      <tr className={classes.row} onClick={() => props.onItemOpenInfo(props.id)}>
	        <td className={classes.cell}>{props.id}</td>
	        <td className={classes.cell}>{props.firstName}</td>
	        <td className={classes.cell}>{props.lastName}</td>
	        <td className={classes.cell}>{props.email}</td>
	        <td className={classes.cell}>{props.phone}</td>
	      </tr>
	)
}

export default TableItem 


