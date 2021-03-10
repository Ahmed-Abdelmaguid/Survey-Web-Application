import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => 
    async function (dispatch) {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    };

    //usually how we would use actions if we didnt use the redux-thunk
    // const request = axios.get('/api/current_user');

    // return {
    //     type: FETCH_USER,
    //     payload: request
    // };

