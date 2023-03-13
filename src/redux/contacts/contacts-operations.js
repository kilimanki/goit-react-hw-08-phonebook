import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/booksAPI';
export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const isDublicate = (contacts, { name, number }) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();
  const dublicate = contacts.find(item => {
    return (
      item.name.toLowerCase() === normalizedName &&
      item.number.toLowerCase() === normalizedNumber
    );
  });

  return Boolean(dublicate);
};
export const addContacts = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(contacts.contacts.items, data)) {
        alert(`${data.name} - ${data.number} is already exist`);
        return false;
      }
    },
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
