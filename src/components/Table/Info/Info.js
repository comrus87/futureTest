import React from 'react';
import classes from './Info.module.css';

const Info = props => {
	// console.log(props.data.address.streetAddress)
	return (
		<div className={classes.container}>
			<p className={classes.item}> Выбран пользователь: 
				<b> {`${props.data.firstName} ${props.data.lastName}`}</b> 
			</p>
			<p className={classes.item}>Описание:</p>
			<textarea className={classes.description} value={props.data.description} disabled></textarea>
			<p className={classes.item}>Адрес проживания: <b>{}</b></p>
			<p className={classes.item}>Город: <b>Waukesha</b></p>
			<p className={classes.item}>Провинция/штат: <b>WI</b></p>
			<p className={classes.item}>Индекс: <b>22178</b></p>
		</div>
	)
}

export default Info