const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')
const Track = mongoose.model('Track')

const router = express.Router()
router.use(requireAuth)

router.get('/tracks', (req, res) => {
    const { userId } = req.user
    Track.find({ userId })
    .then((tracks) => res.status(200).send(tracks))
    .catch((err) => res.status(401).send({ error: err.message }))
})

router.post('/tracks', (req, res) => {
    const { name, locations } = req.body
    const { userId } = req.user
    if(!name || !locations) return res.status(422).send({ error: 'You Must Provide a Name and Locations'})
    const track = new Track({ userId, name, locations })
    track.save()
    .then(() => res.send(track))
    .catch((err) => res.status(422).send({ error: err.message }))
})


module.exports = router