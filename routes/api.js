const express = require('express');
const Ninja = require('../model/Database');


const router = express.Router();


router.get('/ninja', (req, res, next)=>{
   Ninja.geoNear({
       type: "point",
       /////req.query.lng returns a query. parseFloat removes the string
       coordinate:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       {maxDistance: 100000,
        spherical:true} 
        ).then(result=>{
            res.send(result)
        }).catch(next)
});

router.post('/ninja', (req, res, next)=>{
    ///// modelname.create()--this is to create an instance of a model and save it to database
    ////it uses reate instead of creating new instance and saving to the database
    Ninja.create(req.body).then(()=>{
        res.send({
            name: req.body.name,
            rank:req.body.rank
        })
    }).catch(next)
})

router.put('/ninja/:id', (req, res, next)=>{
    ///next argument will let your handle validation error  check app.js to see its use
    Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(response=>{
        res.send(response);
    }).catch(next)
   
});

router.delete('/ninja/:id', (req, res, next)=>{
    ////deleting data from the database
    Ninja.findByIdAndRemove({_id:req.params.id}).then((response)=>{
        res.send(response + 'has been removed from the database')
    }).catch(next)
    
})

module.exports = router;

