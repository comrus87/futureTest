import React, {useState} from 'react';
import classes from './Table.module.css';
import TableHead from './TableHead';
import TableItem from './TableItem';
import Pagination from './Pagination/Pagination';


const Table = props => {
	const [currentPage, setCurrentPage] = useState(1);
  	const [pageSize] = useState(50);

 	let items = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
				<tbody>
					{items.map((person, index) => {
						return <TableItem id={person.id}
										  firstName={person.firstName}
										  lastName={person.lastName}
										  email={person.email}
										  phone={person.phone}
									      key={index} />
					})}
				</tbody>
		  </table>
		</div>
	)
}

export default Table