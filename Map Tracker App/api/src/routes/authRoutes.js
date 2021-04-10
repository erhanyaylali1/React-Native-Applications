const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const router = express.Router()
const User = mongoose.model('User')

router.post('/signup', (req, res) => {
    const { email, password } = req.body
    const user = new User({ email, password })
    user.save()
    .then(() => {
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.status(200).send({ token })
    })
    .catch(err => res.status(402).send(err.message))    
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.status(422).send({ error: 'You Must Enter Email and Password!' })
    User.findOne({ email })
    .then((user) => {
        user.comparePassword(password)
        .then(() => {
            const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
            res.status(200).send({ token })
        }).catch(() => res.status(422).send('Invalid Password'))
    }).catch(() => res.status(404).send('Invalid Email'))
})


module.exports = router