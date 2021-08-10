const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {    // POST /user
    try {
        await User.create({
            nickname: req.body.nickname,
            score: req.body.score,
        });
        const result = await User.findAll({
          attributes: ['nickname', 'score'],
          order: ['score', 'DESC'],
          limit: 10,
        });
        res.status(201).json(result);
    } catch(error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;