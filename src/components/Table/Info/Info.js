import React from 'react';
import classes from './Info.module.css';

const Info = props => {
	return (
		<div className={classes.container}>
			<p className={classes.item}> Выбран пользователь: 
				<b> {`${props.data.firstName} ${props.data.lastName}`}</b> 
			</p>
			<p className={classes.item}>Описание:</p>
			<textarea className={classes.description} value={props.data.description || 'Не указано'} disabled></textarea>
			<p className={classes.item}>Адрес проживания: <b>{props.data.address ? props.data.address.streetAddress : 'Не указан'}</b></p>
			<p className={classes.item}>Город: <b>{props.data.address ? props.data.address.city : 'Не указан'}</b></p>
			<p className={classes.item}>Провинция/штат: <b>{props.data.address ? props.data.address.state : 'Не указан'}</b></p>
			<p className={classes.item}>Индекс: <b>{props.data.address ? props.data.address.zip : 'Не указан'}</b></p>
		</div>
	)
}

export default Info