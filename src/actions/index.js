import Lockr from 'lockr';
import _ from 'lodash';
import { ADD_MOVIE, UPDATE_MOVIE, FILTER_MOVIES } from './types';

const saveToStorage = (movie) => {
  let movies = Lockr.get('InMotionMovies') || [];
  movies.push(movie);
  Lockr.set('InMotionMovies', movies);
};

const editAndSaveToStorage = ({ uuid, titleEdit, genreEdit, yearEdit, castEdit, ratingEdit }) => {
  let movies = Lockr.get('InMotionMovies');
  _.forEach(movies, movie => {
    if (movie.uuid === uuid) {
      movie.title = titleEdit;
      movie.genre = genreEdit;
      movie.year = yearEdit;
      movie.cast = castEdit;
      movie.rating = ratingEdit;
    }
  });
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

export const editMovie = ({ uuid, titleEdit, genreEdit, yearEdit, castEdit, ratingEdit }) => {
  editAndSaveToStorage({ uuid, titleEdit, genreEdit, yearEdit, castEdit, ratingEdit });
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
