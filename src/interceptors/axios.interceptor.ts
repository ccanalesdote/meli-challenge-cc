import axios from 'axios';
import { getValidationErrors } from '../utils';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const AxiosInterceptor = () => {

  axios.interceptors.request.use((request) => {
    console.log('Request interceptor', request);
    return request;
  });

  axios.interceptors.response.use(
    (response) => {
      console.log('Response interceptor', response);
      return response;
    },
    (error) => {
      console.error('Response interceptor', getValidationErrors(error.code));
      const validationErrors = getValidationErrors(error.code);
      toast.error(validationErrors);
      return Promise.reject(error);
    }
  );

}