import { useUser } from '../context/userContext';
// import useAuth from '../utils/lib/useAuth';

function Tag() {
  // const user = useAuth();
  const { email } = useUser();

  return <div>Tag: {email}</div>;
}
export default Tag;
