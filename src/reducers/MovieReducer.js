import Lockr from 'lockr';
import _ from 'lodash';

import { ADD_MOVIE, UPDATE_MOVIE, FILTER_MOVIES } from '../actions/types';

const INITIAL_STATE = Lockr.get('InMotionMovies') || [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [ ...state, action.payload ];
    case UPDATE_MOVIE:
      return [ ...action.payload ];
    case FILTER_MOVIES:
      return Lockr.get('InMotionMovies').filter(movie => {
        return movie.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    default:
      return state;
  }
}
