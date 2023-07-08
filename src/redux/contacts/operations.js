import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const errorMessage = 'Something went wrong, please try again later!';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateContact = createAsyncThunk(
  '/contacts/updateContact',
  async ({name, number, id}, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {name, number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);