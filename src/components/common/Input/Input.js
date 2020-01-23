import React from 'react';
import classes from './Input.module.css';

const Input = ({input, meta, ...props}) => {
	let hasError = meta.touched && meta.error;
	return (
		<React.Fragment>
			<input {...input} {...props} />
			{hasError && <span className={classes.error}>{meta.error}</span>}
		</React.Fragment>
	)
}

export default Input