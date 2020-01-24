import React from 'react';
import {reduxForm, Field} from 'redux-form';
import classes from './UserForm.module.css';
import {required, idValidate, mailValidate, phoneValidate} from './../../utils/validators/validators';
import Input from './../common/Input/Input';

let UserForm = props => {
	return (
		<form className={classes.form} onSubmit={props.handleSubmit}>
			<Field className={classes.input}
						 placeholder={'id'} 
						 name={'id'} 
						 component={Input}
						 validate={[required, idValidate]}
			/>
			<Field className={classes.input} 
						 placeholder={'Имя'} 
						 name={'firstName'} 
						 component={Input}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'Фамилия'}
						 name={'lastName'} 
						 component={Input}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'E-mail'} 
						 name={'email'} 
						 component={Input}
						 validate={[required, mailValidate]}
			/>
			<Field className={classes.input} 
						 placeholder={'Телефон'} 
						 name={'phone'} 
						 component={Input}
						 validate={[required, phoneValidate]}
			/>
			<button className={props.invalid ? classes.btnSubmit + ' ' + classes.btnDisabled : classes.btnSubmit}> Отправить </button>
		</form>
	)
		
}

export default reduxForm({form: 'user'})(UserForm);