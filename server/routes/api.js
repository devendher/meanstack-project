const carmodel=require('../models/carmodel.js');

module.exports=function(app){

  app.post('/addCars', function(req, res){

    var car;

    car = new carmodel({
      name:req.body.name,
      model: [{ name: req.body.modelName}]
    });

    car.save(function(err,cars) {
      if (!err) {
        console.log("Car has been added");
        res.send(cars);
      } else {
        return console.log(err);
      }
    });
  });


//Get all cars

  app.get('/cars/getCars',function(req,res){

    carmodel.find({},function(err,cars){
      if(err) {
        console.log(err);
        return next(err);
      }
      else{
        res.send(cars);
      }
    })

  });

  app.delete('/cars/delete/:id',function(req,res){
    console.log('ID',req.params.id);
    carmodel.remove({_id:req.params.id},function(err,responce){
      if(err){
        console.log(err);

      }
      else{
        res.send(responce);
      }
    })

  });


  var callback=function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  }

  app.get('/cars/searchModel/:carType',function(req,res){
    carmodel.find({'name':req.params.carType},function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });

  });





}//Here module exports close
