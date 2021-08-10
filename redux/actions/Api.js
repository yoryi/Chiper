import axios from 'axios';
import { Url } from '../../util/Endpoints/Endpoints';

//CONSTANTES
export const IS_FETCHING = 'IS_FETCHING';
export const DATA_FETCHED = 'PEDIDO_FETCHED';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_PEDIDO';

//PETICIONES HTTP
export const Getdata = (id) => {
  const Reddit = axios.get(Url + id)

  return dispatch => {
    dispatch({ type: IS_FETCHING });
    Reddit
      .then(response => {
        dispatch({ type: DATA_FETCHED, payload: response.data.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_DATA, payload: err });
      })
  };
};