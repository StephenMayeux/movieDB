import Lockr from 'lockr';
import { ADD_MOVIE } from './types';

const saveToStorage = (movie) => {
  let movies = Lockr.get('InMotionMovies') || [];
  movies.push(movie);
  Lockr.set('InMotionMovies', movies);
};

export const saveMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};
