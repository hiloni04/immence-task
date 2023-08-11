import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from '../store';
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface UsersState {
  userList: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  userList: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersStart(state) {
      state.loading = true;
    },
    getUsersSuccess(state, action: PayloadAction<User[]>) {
      state.userList = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } = usersSlice.actions;
export const fetchUsers = (): AppThunk => async (dispatch, getState) => {
    try {
      dispatch(getUsersStart());
      const response = await axios.get('http://localhost:5000/'); 
      dispatch(getUsersSuccess(response.data));
    } catch (error: any) {
      if (error instanceof Error) {
        dispatch(getUsersFailure(error.message));
      } else {
        dispatch(getUsersFailure('An error occurred.'));
      }
    }
  };

export const selectUsers = (state: RootState) => state.users.userList;
export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUsersError = (state: RootState) => state.users.error;

export default usersSlice.reducer;