import { configureStore, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

export const noodleSlice = createSlice({
  name: 'noodle',

  initialState: {
    list: [],
    images: [],
  },

  reducers: {
    setList(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

const makeStore = () =>
  configureStore({
    reducer: {
      [noodleSlice.name]: noodleSlice.reducer,
    },
    devTools: true,
  });

export const selectSubject = (id: any) => (state: AppState) =>
  state?.[noodleSlice.name]?.[id];

export const wrapper = createWrapper<AppStore>(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
