import React from 'react';
import classes from './Select.module.css';

const Select = props => {
	return (
        <div className={classes.container}>
          <div className={classes.selectContainer}>
            <p className={classes.description}>Выберете набор данных:</p>
            <select className={classes.select} 
            		  value={props.value}
            		  onChange={props.onChange}>
              <option value='small'>Маленький</option>
              <option value='big'>Большой</option>
            </select>
          </div>
          <button className={classes.btnRefresh} onClick={props.refreshData}>Обновить</button>
        </div>
	)
}

export default Select