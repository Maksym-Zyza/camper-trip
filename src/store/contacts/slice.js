import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchApi } from 'API/api-service';

export const fetchData = createAsyncThunk('fetchAll', async () => {
  const data = await fetchApi.getData();
  return data;
});
export const addData = createAsyncThunk('addData', async body => {
  const createItem = await fetchApi.createData(body);
  toast.success(`Data ${createItem.name} was added`);
  return createItem;
});
export const deleteData = createAsyncThunk('deleteData', async id => {
  const deletedItem = await fetchApi.deleteData(id);
  toast.success(`Data ${deletedItem.name} was removed`);
  return deletedItem.id;
});

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.items = state.items.filter(el => el.id !== action.payload);
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const dataReducer = dataSlice.reducer;
