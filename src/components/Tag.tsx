import useAuth from '../utils/lib/useAuth';

function Tag() {
  const user = useAuth();

  return <div>Tag: {user?.email}</div>;
}
export default Tag;
