import Tag from '../components/Tag';
import { useSelector } from 'react-redux';
import { toggleShow } from '../redux/features/sidebar/sidebar_slice';
import { RootState, useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const showSideNav = useSelector((state: RootState) => state.sidebar.show);

  return (
    <div>
      <Tag />
      <button onClick={() => dispatch(toggleShow(!showSideNav))}>Click</button>
    </div>
  );
};
export default Home;
