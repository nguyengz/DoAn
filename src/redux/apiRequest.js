import axios from 'axios';
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } from '../store/reducers/authSlice';
import { getUserFailed, getUserStart, getUserSuccess } from '../store/reducers/userSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('https://jsonplaceholder.typicode.com/users', user);
        dispatch(registerSuccess());
        navigate('/');
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const getAllUsers = async (accesssToken, dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
            headers: { token: `Bearer ${accesssToken}` } // Chữ Bearer phụ thuộc vào từng cái token
        });
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailed());
    }
};
