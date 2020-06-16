const express = require('express');
const Ninja = require('../model/Database');


const router = express.Router();


router.get('/ninja', (req, res)=>{
    res.send({type: 'Hello world'})
});

router.post('/ninja', (req, res)=>{
    
    Ninja.create(req.body).then(()=>{
        res.send({
            name: req.body.name,
            rank:req.body.rank
        })
    })
})

router.put('/ninja/:id', (req, res)=>{
    res.send()
});

router.delete('/ninja/:id', (req, res)=>{
    res.send()
})

module.exports = router;