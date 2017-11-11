import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

export const setCount = createAction('/TEMP/FIRST_ACTION');


const initialState = fromJS({
  itemsCount: 0,
  itemsSum: 0,
});


const handleSetCount = (state, payload) => state.set('itemsCount', payload);

const reducer = createReducer((on) => {
  on(setCount, handleSetCount);
}, initialState);

export default reducer;
