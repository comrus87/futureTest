import React from 'react';
import classes from './Info.module.css';

const Info = props => {
	return (
		<div className={classes.container}>
			<p className={classes.item}> Выбран пользователь: 
				<b> {`${props.data.firstName} ${props.data.lastName}`}</b> 
			</p>
			<p className={classes.item}>Описание:</p>
			<textarea className={classes.description} value={props.data.description} disabled></textarea>
			<p className={classes.item}>Адрес проживания: <b>{props.data.address.streetAddress}</b></p>
			<p className={classes.item}>Город: <b>{props.data.address.city}</b></p>
			<p className={classes.item}>Провинция/штат: <b>{props.data.address.state}</b></p>
			<p className={classes.item}>Индекс: <b>{props.data.address.zip}</b></p>
		</div>
	)
}

export default Info