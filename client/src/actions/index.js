import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => {
    return function (dispatch) {
        axios
        .get('/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };

    //usually how we would use actions if we didnt use the redux-thunk
    // const request = axios.get('/api/current_user');

    // return {
    //     type: FETCH_USER,
    //     payload: request
    // };
};
