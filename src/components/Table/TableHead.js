import React, {useState} from 'react';
import classes from './TableHead.module.css';

const TableHead = props => {
	const [sortId, toggleSortId] = useState(true);
	const [sortFirstName, toggleSortFirstName] = useState(true);
	const [sortLastName, toggleSortLastName] = useState(true);
	const [sortMail, toggleSortMail] = useState(true);
	const [sortPhone, toggleSortPhone] = useState(true);

 	const sortData = (type, sortType, toggleSortId) => {
		let arr = props.data.sort((a, b) => {
			if (sortType) {
				return (a[type] > b[type]) ? 1 : -1;
			}
			return (a[type] < b[type]) ? 1 : -1;
		})
		props.setData(arr);
		toggleSortId(!sortType);
	}

	return (
	    <thead>
	      <tr className={classes.row}>
	        <th className={classes.cell}>
	        	<div className={classes.wrap} onClick={()=> sortData('id', sortId, toggleSortId)}>
		        	<span className={classes.header}>id</span>
		        	<span className={sortId ? classes.triangleUp : classes.triangleDown}></span>
	        	</div>
	        </th>
	        <th className={classes.cell}>
	        	<div className={classes.wrap} onClick={()=> sortData('firstName', sortFirstName, toggleSortFirstName)}>
	        		<span className={classes.header}>firstName</span>
	        		<span className={sortFirstName ? classes.triangleUp : classes.triangleDown}></span>
	        	</div>
	        </th>
	        <th className={classes.cell}>
	       		<div className={classes.wrap} onClick={()=> sortData('lastName', sortLastName, toggleSortLastName)}>
	        		<span className={classes.header}>lastName</span>
		        	<span className={sortLastName ? classes.triangleUp : classes.triangleDown}></span>
	        	</div>
	        </th>
	        <th className={classes.cell}>
	        	<div className={classes.wrap} onClick={()=> sortData('email', sortMail, toggleSortMail)}>
	        		<span className={classes.header}>email</span>
		        	<span className={sortMail ? classes.triangleUp : classes.triangleDown}></span>
	        	</div>
	        </th>
	        <th className={classes.cell}>
	        	<div className={classes.wrap} onClick={()=> sortData('phone', sortPhone, toggleSortPhone)}>
	        		<span className={classes.header}>phone</span>
		        	<span className={sortPhone ? classes.triangleUp : classes.triangleDown}></span>
	        	</div>
	        </th>
	      </tr>
	    </thead>
	)
}

export default TableHead