import instance from './AuthAPI';

export const getAllContacts = () => instance.get('/contacts');
export const addContacts = data => {
  return instance.post('/contacts', data);
};
export const deleteContacts = id => {
  instance.delete(`/contacts/${id}`);
};
