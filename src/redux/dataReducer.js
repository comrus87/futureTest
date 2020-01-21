import {dataApi} from './../api/api';

const SET_DATA = 'data/SET_DATA';
const SET_PRELOADER = 'data/SET_PRELOADER';

let initialState = {
	data: [],
	isFetching: false
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

		default:
			return state;
	}
}

export const setData = data => ({type: SET_DATA, data});
export const toggleFetching = isFetching => ({type: SET_PRELOADER, isFetching});

export const getSmallData = () => async (dispatch) => {
	dispatch(toggleFetching(true));
	let data = await dataApi.getSmallData();
	dispatch(toggleFetching(false));
  dispatch(setData(data));
};

export const getBigData = () => async (dispatch) => {
	dispatch(toggleFetching(true));
	let data = await dataApi.getBigData();
	dispatch(toggleFetching(false));
	dispatch(setData(data));
};

export default dataReducer