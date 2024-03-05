const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose")
const userMiddleware = require("../middleware/user");
const adminMiddleware = require("../middleware/admin");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic 
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username:username,
        password: password
    })
    res.json({
        message: "User created successfully"
    })

});

router.get('/courses',async  (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        Courses:response 
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