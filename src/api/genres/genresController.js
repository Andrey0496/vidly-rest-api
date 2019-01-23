import httpStatus from 'http-status-codes';

import Genre from './genre';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import GenreNotFoundError from './errors/GenreNotFoundError';

export const getAllGenres = asyncMiddleware(async (req, res) => {
  const genres = await Genre.find();
  res.status(httpStatus.OK).json(genres)
});

export const getGenreById = asyncMiddleware(async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findById(id);
  if(!genre){
    throw new GenreNotFoundError();
  }
  res.status(httpStatus.OK).json(genre);
});

export const createGenre = asyncMiddleware(async (req, res) => {
    const { name } = req.body;
    const genre = new Genre({ name });
    const gen = await genre.save()
      .catch(err => res.status(400).json({ errors: err }));
    res.status(httpStatus.CREATED).json(gen);
});

export const updateGenre = asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    req.body.id = id;

    const genre = await Genre.findByIdAndUpdate(id, req.body, { new: true })
      .catch(err => res.status(400).json({ errors: err }));

    if(!genre){
      throw new GenreNotFoundError();
    }

    res.status(httpStatus.OK).json(genre);
});

export const deleteGenre = asyncMiddleware(async (req,res)=>{
  const { id } = req.params;
  const genre = await Genre.findByIdAndDelete(id);
  if(!genre){
    throw new GenreNotFoundError();
  }
  res.status(httpStatus.OK).json(genre);
})
