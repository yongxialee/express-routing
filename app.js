const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const {mean,median,mode,checkAndConvertValidateNumsArr} = require('./function')

app.use(express.json());

//mean route
app.get('/mean',(req,res,next)=>{
    if(!req.query.nums){
        throw new ExpressError("A query requires nums with a comma-separated list of numbers"),400
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = checkAndConvertValidateNumsArr(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    
    let result = {
        operation:"mean",
        result:mean(nums)
    }
    console.log("mean route");

    return res.send(result);
})


// median route
app.get('/median',(req,res)=>{
    console.log("This is median route");
    if(!req.query.nums){
        throw new ExpressError("A query requires nums with a comma-separated list of numbers"),400
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = checkAndConvertValidateNumsArr(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    
    let result = {
        operation:"median",
        result:median(nums)
    }

    return res.send(result);
})

//mode route
app.get('/mode',(req,res)=>{
    console.log("This is mode route");
    if(!req.query.nums){
        throw new ExpressError("A query requires nums with a comma-separated list of numbers"),400
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = checkAndConvertValidateNumsArr(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    
    let result = {
        operation:"mode",
        result:mode(nums)
    }

    return res.send(result);
})


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
  });
  
  /** general error handler */
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });
app.listen(3000,function(){
    console.log("server is running on port 3000");
})
