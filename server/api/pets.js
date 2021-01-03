const router = require('express').Router();
const { Pet } = require('../db/');

// GET /api/pets
router.get('/', async (req, res, next) => {
    try {
        const pets = await Pet.findAll();
        res.json(pets);
    } catch (err) {
        next(err)
    }
});

// GET /api/pets/:petId
router.get('/:petId', async (req, res, next) => {
    try {
        const pet = await Pet.findByPk(req.params.petId);
        res.json(pet);
    } catch (err) {
        next(err)
    }
});