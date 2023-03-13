import { useSelector } from 'react-redux';
import { UserName } from 'redux/auth/auth-selectors';
import css from './Pages.module.css';
const Intro = () => {
  const name = useSelector(UserName);
  return (
    <>
      {!name ? (
        <h2 className={css.title}>
          Welcome buddy, login or sign up to continue
        </h2>
      ) : (
        <h2 className={css.title}>Have a good time {name}</h2>
      )}
    </>
  );
};
export default Intro;
