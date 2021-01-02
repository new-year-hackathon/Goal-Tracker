import axios from 'axios';
import history from '../history';

// Action Types
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const ADD_USER = 'ADD_USER';

// Initial State
const defaultUser = {};

// Action Creators
const getUser = (user) => ({type: GET_USER, user});
const removeUser = () => ({type: REMOVE_USER});
const addUser = (user) => ({type: ADD_USER, user});

// Thunk Creators
export const me = () => async (dispatch) => {
    try {
        const res = await axios.get('/auth/me');
        dispatch(getUser(res.data || defaultUser));
    } catch (err) {
        console.error(err);
    }
};
  
export const auth = (email, password) => async (dispatch) => {
    let res;
    try {
        res = await axios.post(`/auth/login`, {email, password});
    } catch (authError) {
        return dispatch(getUser({error: authError}));
    }
    try {
        dispatch(getUser(res.data));
        history.push('/home');
    } catch (dispatchOrHistoryErr) {
        console.error(dispatchOrHistoryErr);
    }
};
  
export const addUserThunk = (user) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`/api/users`, user);
            dispatch(addUser(data));
        } catch (error) {
            console.log('error POSTING user', user);
        }
    };
};
  
export const updateUserThunk = (user) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`/api/users/${user.id}`, user);
            dispatch(getUser(data));
        } catch (error) {
            console.log('error editing user info');
        }
    };
};
  
export const logout = () => async (dispatch) => {
    try {
        await axios.post('/auth/logout');
        dispatch(removeUser());
        history.push('/login');
    } catch (err) {
        console.error(err);
    }
};

// Reducer
export default function (state = defaultUser, action) {
    switch (action.type) {
        case GET_USER:
            return action.user;
        case REMOVE_USER:
            return defaultUser;
        case ADD_USER:
            return [...state, action.user];
        default:
            return state;
    }
}