import Tag from '../components/Tag';
import { toggleShow } from '../redux/features/sidebar/sidebar_slice';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Tag />
      <button onClick={() => dispatch(toggleShow())}>Click</button>
    </div>
  );
};
export default Home;
