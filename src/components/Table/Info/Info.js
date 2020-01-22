import React from 'react';
import classes from './Info.module.css';

const Info = props => {
	return (
		<div className={classes.container}>
			<p> Выбран пользователь <b>Sue Corson</b> </p>
			<p>Описание:</p>
			<textarea></textarea>
			<p>Адрес проживания: <b>9792 Mattis Ct</b></p>
			<p>Город: <b>Waukesha</b></p>
			<p>Провинция/штат: <b>WI</b></p>
			<p>Индекс: <b>22178</b></p>
		</div>
	)
}

export default Info