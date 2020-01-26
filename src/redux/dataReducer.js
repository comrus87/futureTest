import {dataApi} from './../api/api';

const SET_DATA = 'data/SET_DATA';
const SET_RENDER_MODE = 'data/SET_RENDER_MODE';
const SET_PRELOADER = 'data/SET_PRELOADER';
const SET_CURRENT_PAGE = 'data/SET_CURRENT_PAGE';
const SET_CURRENT_INFO = 'data/SET_CURRENT_INFO';
const SET_USER = 'data/SET_USER';


let initialState = {
	data: [],
	renderMode: 'small',
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

		case SET_RENDER_MODE:
			return {
				...state,
				renderMode: action.value
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

		case SET_USER:
			return {
				...state,
				data: [...state.data.slice(0, 0), action.user, ...state.data]
			}

		default:
			return state;
	}
}

export const setData = data => ({type: SET_DATA, data});
export const setRenderMode = value => ({type: SET_RENDER_MODE, value});
export const toggleFetching = isFetching => ({type: SET_PRELOADER, isFetching});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setCurrentInfo = dataInfo => ({type: SET_CURRENT_INFO, dataInfo});
export const setUser = user => ({type: SET_USER, user});

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