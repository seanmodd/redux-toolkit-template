# Redux Actions
***rdac* - Redux Toolkit: Create Action (also in reducer)**
```
import { createAction } from '@reduxjs/toolkit';

const name = createAction('action/type');
```
***rdac* - Redux actionCreator (Preferred)**
```
export const actionCreator = (payload) => {
  return {
    type: 'ACTION_TYPE',
    payload
  }
};
```
***action* - Redux actionCreator (Async Await)**
```
export const  = () => {
  return async dispatch => {
    try {

    } catch (e) {}
  };
};
```
***rdat* - Creates const for Action Type**
```
export const ACTION_NAME = 'ACTION_NAME';
```
# Redux Store
***rts* - Redux Toolkit: Configure Store**
```
import { configureStore } from '@reduxjs/toolkit';

import reducer from 'location';

export default configureStore({
  reducerName: reducer,
});
```
***store* - Redux Store**
```
import { reducerName } from './reducer'
import { createStore } from 'redux'

const store = createStore(reducerName)

export default store
```
***provider* - React-Redux Provider**
```
<Provider store={store}>
  Component
</Provider>
```
# Redux Reducer
***rtcr* - Redux Toolkit: Create Reducer (Preferred)**
```
import { createAction, createReducer } from '@reduxjs/toolkit';

const name = createAction('action/type');

const initialState = {};

const reducerName = createReducer(initialState, builder => {
  builder
    .addCase(name, (state, action) => {
      
    });
});
```
***rdr* - Redux Reducer (Preferred)**
```
const initialState = {}

const reducerName = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === 'ACTION_TYPE'){
    // return something 
  } else {
    return newState
  };
};

export default reducerName;
```
***rxreducer* - Redux Reducer**
```
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case first:
      return { ...state, ...payload };

    default:
      return state;
  }
};
```
***rdcr* - Creates Redux Combine Reducers**
```
import { combineReducers } from 'redux';

import reducerName from 'reducerPath';

export default combineReducers({
  
});
```
# Redux Slice
***rtcs* - Redux Toolkit: Create Slice (Preferred)**
```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const sliceName = createSlice({
  name: 'name',
  initialState,
  reducers: {
    name: (state, action) => {
      // ...
    },
  },
});

export const { name } = sliceName.actions;

export default sliceName.reducer;
```
***rxslice* - Redux Slice**
```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const BugsList = createSlice({
  name: second,
  initialState,
  reducers: {},
});

export const {} = BugsList.actions;

export default BugsList.reducer;
```
# Redux Selectors
***selector* - Redux Select**
```
export const selectorName = createSelector(
  [filter1, filter2]
  (filter1, filter2) => {

  }
)
```
***rxselect* - Redux Select**
```
import { createSelector } from 'reselect';

export const first = (state) => state.second;
```
