// import axios from '../setup/axios';

// const registerNewUser = (userData) => {
//     const { confirmPassword, ...userDataWithoutConfirmPassword } = userData;
//     return axios.post('/add', userDataWithoutConfirmPassword);
// };

// const loginUser = (userData) => {
//     const { email, password } = userData;
//     return axios.post('/login', { email, password });
// };

// const logoutUser = () => {
//     return axios.post('/logout');
// };

// export { registerNewUser, loginUser, logoutUser };

// import axios from '../setup/axios';
import axios from "axios";
const registerNewUser = (userData) => {
    const { confirmPassword, ...userDataWithoutConfirmPassword } = userData;
    return axios.post('http://192.168.0.121:8000/api/user/add', userDataWithoutConfirmPassword);
};

const loginUser = (userData) => {
    const { email, password } = userData;
    return axios.post('http://192.168.0.121:8000/api/user/login', { email, password });
};

const logoutUser = () => {
    return axios.post('/logout');
};

export { registerNewUser, loginUser, logoutUser };
