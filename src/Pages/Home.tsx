import Tag from '../components/Tag';
import UserContextProvider from '../context/userContext';
import { toggleShow } from '../redux/features/sidebar/sidebar_slice';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <UserContextProvider>
      <Tag />
      <p></p>
      <button onClick={() => dispatch(toggleShow())}>Click</button>
    </UserContextProvider>
  );
};
export default Home;
