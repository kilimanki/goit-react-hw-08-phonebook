import Textfield from 'shared/TextField/TextField';
import useForm from 'shared/UseForm/UseForm';
import PropTypes from 'prop-types';
import css from './LoginForm.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Button from '@mui/material/Button';
import fields from '../fields';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};
export const Login = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    INITIAL_STATE,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div className={`${css.name} ${css.inputBox}`}>
          <AccountCircleIcon className={css.icon} />
          <Textfield value={email} onChange={handleChange} {...fields.email} />
        </div>

        <div className={`${css.name} ${css.inputBox}`}>
          <VpnKeyIcon className={css.icon} />
          <Textfield
            value={password}
            onChange={handleChange}
            {...fields.password}
          />
        </div>

        <Button type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </div>
  );
};
Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
