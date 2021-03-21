const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router();

router.use(requireAuth)

router.get('/tracks', async (req, res) => {
    const track = await Track.find({ userId: req.user._id })

    res.send(track);
})

module.exports = router;
