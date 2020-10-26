import axios from 'axios';

export const GET_REQUESTS = 'get_requests';
export const GET_REQUESTS_ERROR = 'get_requests_error';
export const LOAD_IPHONES = 'load_iphones';
export const LOAD_IPHONES_ERROR = 'load_iphones_error';

/**
 * @description Request to the API to get requests
 *
 * @return {object} dispatch object
 *
 */
export const getRequests = (fetch, pageNumber, storageSize, name, grade, min, max) => (dispatch) =>
    axios.get(`/api/requests?fetch=${fetch}&page=${pageNumber}${storageSize ? `&storageSize=${storageSize.trim()}` : ''}${name ? `&name=${name.trim()}` : ''}${grade ? `&grade=${grade.trim()}` : ''}&priceMin=${min}&priceMax=${max}`)
        .then(({data}) => {
            return dispatch({
                type: GET_REQUESTS,
                payload: data,
            });
        })
        .catch(({response}) => {
            Promise.reject(
                dispatch({
                    type: GET_REQUESTS_ERROR,
                    payload: response.data.error
                })
            );
        });

/**
 * @description Request to the API to pull iphones from sheet and save to the database
 *
 * @return {object} dispatch object
 *
 */
export const loadiPhones = () => (dispatch) =>
    axios.post(`/api/requests`)
        .then(({data}) => {
            return dispatch({
                type: LOAD_IPHONES,
                payload: data.response
            });
        })
        .catch(({response}) => {
            Promise.reject(
                dispatch({
                    type: LOAD_IPHONES_ERROR,
                    payload: response.data.error
                })
            );
        });