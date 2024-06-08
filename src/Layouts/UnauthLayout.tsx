import { Outlet } from 'react-router-dom';

function UnauthLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default UnauthLayout;
