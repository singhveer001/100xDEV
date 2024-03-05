const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();

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

router.post('/courses', adminMiddleware,async (req, res) => {
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
// here uses promise syntax
router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
        .then(function(response){
            res.json({
                courses: response
            })
        })

});

// using async await 
// router.get('/courses', adminMiddleware,async (req, res) => {
//     // Implement fetching all courses logic
//     const response = await Course.find({})
//             res.json({
//                 courses: response
//             })
// });
module.exports = router;