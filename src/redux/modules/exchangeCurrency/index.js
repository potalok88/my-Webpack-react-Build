import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

const initialState = fromJS({
  date: null,
  valutes: {},
});

export const fetch = createAction('EXCHANGE_CURRENCY/FETCH');
export const fetchSuccess = createAction('EXCHANGE_CURRENCY/FETCH_SUCCESS');
export const fetchFailure = createAction('EXCHANGE_CURRENCY/FETCH_FAILURE');


const handleFetchSuccess = (state, payload) => {
  const { data = {} } = payload;
  const valutes = state.get('valutes');

  return state
    .set('date', data.Date)
    .set('valutes', {
      ...valutes,
      ...data.Valute,
    });
};

// TODO
const handleFetchFailure = state => state;

const reducer = createReducer((on) => {
  on(fetchSuccess, handleFetchSuccess);
  on(fetchFailure, handleFetchFailure);
}, initialState);

export default reducer;
