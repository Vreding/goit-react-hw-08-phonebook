import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = function (state) {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = function (state, action) {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...action.payload].sort((a, b) => a.name.localeCompare(b.name)),
      };
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [action.payload, ...state.items],
      };
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },
    [deleteContact.rejected]: handleRejected,

    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      const id = action.payload.id;
      const name = action.payload.name;
      const number = action.payload.number;

      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.map(item =>
          item.id === id ? { id, name, number } : item
        ),
      };
    },
    [updateContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
