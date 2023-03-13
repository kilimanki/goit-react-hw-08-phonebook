import { useDispatch, useSelector } from 'react-redux';
import Form from './Form/Form';
import { List } from './List/List';
import { useEffect } from 'react';
import { Input } from './Input/Input';
import { addContacts, fetchContacts } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selector';

import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const onSubmitForm = data => {
    dispatch(addContacts(data));
  };
  return (
    <>
      <div className={css.block}>
        <Form onSubmit={onSubmitForm} />
        {!contacts.length ? (
          <p></p>
        ) : (
          <div>
            <h2 className={css.title}>Contacts</h2>
            <Input />
            <List />
          </div>
        )}
      </div>
    </>
  );
};
export default Contacts;
