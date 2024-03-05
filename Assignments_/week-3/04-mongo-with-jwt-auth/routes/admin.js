const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,User,Course} = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // Check if a user with this username already exist
    Admin.create({
        username:username,
        password:password
    })
    .then(function(){
        res.json({
            message:"Admin created Successfully "
        })
    })  
    .catch(function(){
        res.status(404).json({
            msg:"Something went wrong"
        })
    })
    

});

router.post('/signin',async  (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod to do input validatiion
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
        const response = await Course.find({})
            
        res.json({
                courses: response
            })
});

module.exports = router;