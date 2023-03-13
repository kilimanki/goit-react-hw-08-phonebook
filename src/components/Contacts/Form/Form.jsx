import css from './Form.module.css';

import useForm from 'shared/UseForm/UseForm';
const INITIAL_STATE = {
  name: '',
  number: '',
};
const Form = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    INITIAL_STATE,
    onSubmit,
  });

  const { name, number } = state;
  return (
    <>
      <h3 className={css.title}>Phonebook</h3>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.item} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <label className={css.item} htmlFor="number">
          Number
        </label>
        <input
          id="number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};
export default Form;
