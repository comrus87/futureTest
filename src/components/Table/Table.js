import React, {useState} from 'react';
import classes from './Table.module.css';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Pagination from './Pagination/Pagination';


const Table = props => {
	const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(50);

 	let items = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

 	console.log(items)

 	const onPageChanged = (page) => {
 		setCurrentPage(page)
 	}

	return (
		<div>
			<Pagination totalCount={props.data.length} 
									currentPage={currentPage}
									pageSize={pageSize}
									onPageChanged={onPageChanged} />
			<table className={classes.table}>
				<TableHead />
				{items.map((person, index) => {
					return <TableBody id={person.id}
														firstName={person.firstName}
														lastName={person.lastName}
														email={person.email}
														phone={person.phone}
														key={index} />
				})}
		  </table>
		</div>
	)
}

export default Table