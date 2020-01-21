import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'http://www.filltext.com/'
})

export const dataApi = {

	getSmallData() {
		return instance.get('?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
					   .then(response => response.data);
	},

	getBigData() {
		return instance.get('?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
				       .then(response => response.data);
	}
}
