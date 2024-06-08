import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import AuthLayout from './Layouts/AuthLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import UnauthLayout from './Layouts/UnauthLayout';
import Register from './Pages/Register';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        {/* Protected Routes Here */}
        <Route element={<AuthLayout />}>
          <Route
            path='/'
            element={<Home />}
          />
        </Route>
      </Route>
      {/* General Route */}
      <Route element={<UnauthLayout />}>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Route>
    </Routes>
  );
}
export default App;
