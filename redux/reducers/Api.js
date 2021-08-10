import { IS_FETCHING, DATA_FETCHED, ERROR_FETCHING_DATA } from '../actions/Api';

const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
}

const Api = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetching: true };

    case DATA_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        data: action.payload
      };

    case ERROR_FETCHING_DATA:
      return { ...state, fetching: false, error: action };

    default:
      return state;
  }
};
export default Api;