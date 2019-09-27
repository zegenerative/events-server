const { Router } = require('express')
const Event = require('../event/model')
const router = new Router()

//we are going to make routes using the Event model
//CRUD: Create(POST), Read(GET), Update(PUT), Delete(DELETE)

//Create
router.post('/event', (req, res, next) => {
    Event.create(req.body)
    .then(event => res.send(event))
    .catch(next)
})

//Read
router.get('/event/:id', (req, res, next) => {
    Event.findByPk(req.params.eventId)
    .then(event => res.send(event))
    .catch(next)
})

//Update
router.put('/event/:id', (req, res, next) => {
    Event.findByPk(req.params.id)
    .then(event => {
        event.update(req.body)
        .then(event => res.send(event))
    })
    .catch(next)
})

//Delete
router.delete('/event/:id', (req, res, next) => {
    Event.findByPk(req.params.id)
    .then(event => {
       event.destroy()
       .then(res.send(event))
       .then(console.log('Event destroyed')) 
    })
    .catch(next)
})

module.exports = router