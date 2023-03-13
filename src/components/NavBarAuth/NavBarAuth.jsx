import { NavLink } from 'react-router-dom';
import css from './NavBarAuth.module.css';

export const NavBarAuth = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/signup " className={`${css.auth} `}>
        Sign up
      </NavLink>

      <NavLink to="/login" className={css.auth}>
        Login
      </NavLink>
    </div>
  );
};
