import Lockr from 'lockr';
import _ from 'lodash';
import { ADD_MOVIE, UPDATE_MOVIE, FILTER_MOVIES } from './types';

const saveToStorage = (movie) => {
  let movies = Lockr.get('InMotionMovies') || [];
  movies.unshift(movie);
  Lockr.set('InMotionMovies', movies);
};

const editAndSaveToStorage = (afterUpdate) => {
  let movies = Lockr.get('InMotionMovies');
  const beforeUpdate = _.find(movies, movie => movie.uuid === afterUpdate.uuid);
  Object.assign(beforeUpdate, afterUpdate);
  Lockr.set('InMotionMovies', movies);
};

const deleteAndUpdateStorage = (uuid) => {
  let movies = Lockr.get('InMotionMovies');
  _.remove(movies, movie => {
    return movie.uuid === uuid;
  });
  Lockr.set('InMotionMovies', movies);
};

export const saveMovie = (movie) => {
  saveToStorage(movie);
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

export const editMovie = ({ uuid, title, genre, year, cast, rating }) => {
  editAndSaveToStorage({ uuid, title, genre, year, cast, rating });
  return {
    type: UPDATE_MOVIE,
    payload: Lockr.get('InMotionMovies')
  };
};

export const deleteMovie = (uuid) => {
  deleteAndUpdateStorage(uuid);
  return {
    type: UPDATE_MOVIE,
    payload: Lockr.get('InMotionMovies')
  };
};

export const filterMovies = (term) => {
  return {
    type: FILTER_MOVIES,
    payload: term
  };
};
