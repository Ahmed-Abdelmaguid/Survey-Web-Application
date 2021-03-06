// to allows us to import the reducers directly which will give us in any file called index.js
import { combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers ({
    auth: authReducer,
    form: reduxForm
});