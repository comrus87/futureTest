import React from 'react';
import classes from './TableBody.module.css';

const TableBody = props => {
	return (
	    <tbody>
	      <tr className={classes.row}>
	        <td className={classes.cell}>{props.id}</td>
	        <td className={classes.cell}>{props.firstName}</td>
	        <td className={classes.cell}>{props.lastName}</td>
	        <td className={classes.cell}>{props.email}</td>
	        <td className={classes.cell}>{props.phone}</td>
	      </tr>
	    </tbody>
	)
}

export default TableBody 


