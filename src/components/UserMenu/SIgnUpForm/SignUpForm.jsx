import Textfield from 'shared/TextField/TextField';
import useForm from 'shared/UseForm/UseForm';
import css from './SignUpForm.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import fields from '../fields';
const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};
export const SignUp = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    INITIAL_STATE,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <>
      <div className={css.form}>
        <form onSubmit={handleSubmit}>
          <div className={`${css.name} ${css.inputBox}`}>
            <AccountCircleIcon className={css.icon} />
            <Textfield value={name} onChange={handleChange} {...fields.name} />
          </div>
          <div className={`${css.name} ${css.inputBox}`}>
            <EmailIcon className={css.icon} />
            <Textfield
              value={email}
              onChange={handleChange}
              {...fields.email}
            />
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
      {/* <form onSubmit={handleSubmit}>
        <Textfield value={name} onChange={handleChange} {...fields.name} />
        <Textfield value={email} onChange={handleChange} {...fields.email} />
        <Textfield
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <button type="submit">Sign up </button>
      </form> */}
    </>
  );
};
