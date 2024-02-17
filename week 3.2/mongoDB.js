const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user1:user1%401@cluster0.zdn8o0x.mongodb.net/userappnew")

// mongoose expect you to first describe => Means this is what my schema/table looks like
const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({ 
    name: 'Veerbhan Singh', 
    email : "veer@gmail.com", 
    password: "123" 
});
user.save();

// kitty.save().then(() => console.log('meow'));