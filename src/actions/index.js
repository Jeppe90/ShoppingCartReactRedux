import streams from '../apis/contacts'
import {
FETCH_PRODUCTS,
} from './action-types/types'

export const fetchContacts = () => async dispatch => {
    const response = await streams.get('/contacts');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data})
};