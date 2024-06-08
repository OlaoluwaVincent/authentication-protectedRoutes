import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './redux/storeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </BrowserRouter>
);
