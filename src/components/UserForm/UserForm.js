import React from 'react';
import {reduxForm, Field} from 'redux-form';
import classes from './UserForm.module.css';
import {required} from './../../utils/validators/validators';

let UserForm = props => {
	return (
		<form className={classes.form} onSubmit={props.handleSubmit}>
			<Field className={classes.input}
						 placeholder={'id'} 
						 name={'id'} 
						 component={'input'}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'Имя'} 
						 name={'firstName'} 
						 component={'input'}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'Фамилия'}
						 name={'lastName'} 
						 component={'input'}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'E-mail'} 
						 name={'email'} 
						 component={'input'}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'Телефон'} 
						 name={'phone'} 
						 component={'input'}
						 validate={[required]}
			/>
			<button className={classes.btnSubmit}> Отправить </button>
		</form>
	)
		
}

export default reduxForm({form: 'user'})(UserForm);