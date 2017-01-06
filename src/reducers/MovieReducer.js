import Lockr from 'lockr';
import { ADD_MOVIE, UPDATE_MOVIE } from '../actions/types';

const INITIAL_STATE = Lockr.get('InMotionMovies') || [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [ ...state, action.payload ];
    case UPDATE_MOVIE:
      return [ ...action.payload ];
    default:
      return state;
  }
}
