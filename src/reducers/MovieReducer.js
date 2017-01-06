import Lockr from 'lockr';
import { ADD_MOVIE } from '../actions/types';

const INITIAL_STATE = Lockr.get('InMotionMovies') || [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}
