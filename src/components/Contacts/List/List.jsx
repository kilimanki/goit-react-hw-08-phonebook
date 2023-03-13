import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import css from './List.module.css';

export const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const result = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    return result;
  };
  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };
  const items = filteredContacts();
  const elements = items.map(item => {
    return (
      <li key={item.id} className={css.item}>
        <div>
          <span className={css.name}>{item.name}:</span>
          <span className={css.name}>{item.number}</span>
        </div>
        <button onClick={() => deleteContact(item.id)}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
