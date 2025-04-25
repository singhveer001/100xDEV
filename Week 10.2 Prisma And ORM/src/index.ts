import { PrismaClient } from "@prisma/client";
import express from "express";
import bcrypt from "bcrypt"
const app = express();

app.use(express.json())
const client = new PrismaClient();

async function createUser (){
    await client.user.create({
        data : {
            username : "sonal",
            password : "sonal@1",
            age : 26
        }
    })
}

// createUser()

async function updateUser (){
    await client.user.update({
        where : {
            id : 1 
        },
        data  : {
            username : "harkiratSinghn"
        }
    })
}

// updateUser()

async function deleteUser (){
    await client.user.delete({
            where : {
                id : 1 
            }
    })
}

// deleteUser()

async function getUsers ( ){
    const data = await client.user.findMany()
    console.log(data)
}

getUsers()

async function getUsers2 ( ){
    const data = await client.user.findFirst({
        where : {
            id :1
        },
        select : {
            username : true
        }
    })
    console.log(data?.username)
}

getUsers2()

// getting user with join and refrences
async function getUsers3 ( ){
    const data = await client.user.findFirst({
        where : {
            id :1
        },
        include : {
            todos : true
        }
    })
    console.log(data)
}

// Create apis using prisma postgres express

app.get("/users", async (req, res) => {
    const users =  await client.user.findMany();
    res.json({
        msg : users
    })
})

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const user =  await client.user.findFirst({
        where : {
            id : Number(id)
        },
        select : {
            todos : true
        }
    });
    res.json({
        data : user
    })
})

app.post("/user", async (req, res) => {
    const {username, password,age } = req.body
    const hashedPassword = await bcrypt.hash(password,10);

    await client.user.create({
        data: {
            username ,
            password : String(hashedPassword) ,
            age 
        }
    })
    res.json({
        msg : "User created Successfully"
    })
})

app.listen(4000,()=>{
    console.log("Server Started")
})