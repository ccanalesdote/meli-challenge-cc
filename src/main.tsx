import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/store';

import App from './App.tsx';
import { AxiosInterceptor } from './interceptors/axios.interceptor.ts';

import './index.css';

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
