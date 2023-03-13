import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './NavBar.module.css';
import { NavBarAuth } from 'components/NavBarAuth/NavBarAuth';
import { NavBarUser } from 'components/NavBarUser/NavBarUser';
import { DiDrupal } from 'react-icons/di';
export const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={css.container}>
      <Link to="/">
        <DiDrupal className={css.logo} />
      </Link>
      {!isLogin && <NavBarAuth />}
      {isLogin && (
        <Link to="/contacts" className={css.contacts}>
          Contacts
        </Link>
      )}
      {isLogin && <NavBarUser />}
    </div>
  );
};
