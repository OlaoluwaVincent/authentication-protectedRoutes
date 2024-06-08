import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

// const setAuthorizationHeader = (token: string | null | undefined) => {
//   if (token) {
//     axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axiosInstance.defaults.headers.common['Authorization'];
//   }
// };
//* GET USER TOKEN FROM THE SESSION
// export const getToken = async () => {
//   setAuthorizationHeader();
// };
