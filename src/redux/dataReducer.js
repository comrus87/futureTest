import {dataApi} from './../api/api';

const SET_DATA = 'data/SET_DATA';
const SET_PRELOADER = 'data/SET_PRELOADER';
const SET_CURRENT_PAGE = 'data/SET_CURRENT_PAGE';
const SET_CURRENT_INFO = 'data/SET_CURRENT_INFO';

let initialState = {
	data: [],
	isFetching: false,
	currentPage: 1,
	pageSize: 50,
	dataInfo: {}
}

const dataReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_DATA:
			return {
				...state,
				data: [...action.data]
			}

		case SET_PRELOADER:
			return {
				...state,
				isFetching: action.isFetching
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case SET_CURRENT_INFO:
			return {
				...state,
				dataInfo: {...action.dataInfo}
			}

		default:
			return state;
	}
}

export const setData = data => ({type: SET_DATA, data});
export const toggleFetching = isFetching => ({type: SET_PRELOADER, isFetching});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setCurrentInfo = dataInfo => ({type: SET_CURRENT_INFO, dataInfo});


export const getSmallData = () => (dispatch) => {
	dispatch(toggleFetching(true));
	let data = dataApi.getSmallData();
	data.then(data => {
		dispatch(toggleFetching(false));
  		dispatch(setData(data));
	})

};

export const getBigData = () => (dispatch) => {
	dispatch(toggleFetching(true));
	let data = dataApi.getBigData();
	data.then(data => {
		dispatch(toggleFetching(false));
		dispatch(setData(data));
	})

};

export default dataReducer