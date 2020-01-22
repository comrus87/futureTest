import React, {useState} from 'react';
import classes from './Table.module.css';
import TableHead from './TableHead';
import TableItem from './TableItem';
import Pagination from './Pagination/Pagination';
import Info from './Info/Info';


const Table = props => {
	const [dataInfo, setDataInfo] = useState({})

 	let users = props.data.slice((props.currentPage - 1) * props.pageSize, props.currentPage * props.pageSize);

 	const onPageChanged = (page) => {
 		props.setCurrentPage(page);
 	}

 	const onItemOpenInfo = (id) => {
 		let a = users.filter(u => u.id === id)[0];
 		setDataInfo(a);
 	}

	return (
		<div>
			<Pagination totalCount={props.data.length} 
						currentPage={props.currentPage} 
						pageSize={props.pageSize}
						onPageChanged={onPageChanged} />
			<table className={classes.table}>
				<TableHead />
				<tbody>
					{users.map((person, index) => {
						return <TableItem id={person.id}
										  firstName={person.firstName}
										  lastName={person.lastName}
										  email={person.email}
										  phone={person.phone}
									      key={index}
									      onItemOpenInfo={onItemOpenInfo} />
					})}
				</tbody>
		  	</table>
		  		<Info data={dataInfo}/>
			</div>
	)
}

export default Table