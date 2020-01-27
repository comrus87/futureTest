import React, {useState} from 'react';
import classes from './Table.module.css';
import TableHead from './TableHead';
import TableItem from './TableItem';
import Pagination from './Pagination/Pagination';
import Info from './Info/Info';


const Table = props => {
	const [isInfo, setInfo] = useState(false);

 	let users = props.data.slice((props.currentPage - 1) * props.pageSize, props.currentPage * props.pageSize);

 	const onPageChanged = (page) => {
 		props.setCurrentPage(page);
 	}

 	const onItemOpenInfo = (id) => {
 		let a = users.filter(u => u.id === id)[0];
 		props.setCurrentInfo(a);
 		setInfo(true);
 	}

	return (
		<div>
			<Pagination totalCount={props.data.length} 
						currentPage={props.currentPage} 
						pageSize={props.pageSize}
						onPageChanged={onPageChanged} />
			<table className={classes.table}>
				<TableHead data={props.data} setData={props.setData} />
				<tbody>
					{users.map((user, index) => {
						return <TableItem id={user.id}
										  firstName={user.firstName}
										  lastName={user.lastName}
										  email={user.email}
										  phone={user.phone}
									      key={index}
									      onItemOpenInfo={onItemOpenInfo} />
					})}
				</tbody>
		  	</table>
		  		{props.isFound && <span className={classes.foundMessage}> Ничего не найдено</span>}
		  		{isInfo && <Info data={props.dataInfo}/>}
			</div>
	)
}

export default Table