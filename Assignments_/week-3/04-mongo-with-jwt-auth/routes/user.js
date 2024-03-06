const { Router } = require("express");
const router = Router();
const {User,Course} = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
const mongoose =require("mongoose")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username:username,
        password:password
    })

    .then(function(){
        res.json({
            message:"User created Successfully "
        })
    })  
    .catch(function(){
        res.status(404).json({
            msg:"Something went wrong"
        })
    })

    
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.user.password;

    const user = await User.findOne({
        username,
        password
    })

    if(user !== null){
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message:"Incorrect username and password"
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
            
    res.json({
            courses: response
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username:username
    },{
        "$push": {
        purchasedCourses: new mongoose.Types.ObjectId(courseId)
        } 
    }).catch(function(e){
        console.log(e);
    })
    res.json({
        message: "Purchase Complete!"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    })

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses : courses 
    })
});

module.exports = router