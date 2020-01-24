import React from 'react';
import {reduxForm, Field} from 'redux-form';
import classes from './SearchForm.module.css';
import {required} from './../../utils/validators/validators';

let SearchForm = props => {
	return (
		<form className={classes.container} onSubmit={props.handleSubmit}>
			<Field  className={classes.input} name={'searchValue'} component={'input'} validate={[required]} />
			<button className={classes.btnSearch}>найти</button>
		</form>
	)
}

export default reduxForm({form: 'search'})(SearchForm);

