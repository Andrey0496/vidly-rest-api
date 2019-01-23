import express from 'express';

import validateObjectId from '../../middleware/validateObjectId';
import {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
} from './genresController';


const router = express.Router();

router.get('/', getAllGenres);
router.get('/:id', validateObjectId, getGenreById);
router.post('/', createGenre);
router.put('/:id', validateObjectId, updateGenre);
router.delete('/:id', validateObjectId, deleteGenre);

export default router;
