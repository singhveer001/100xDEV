 import { Client } from "pg";
 import express from "express";
 import dotenv from 'dotenv'
 dotenv.config()

 const app = express()
 app.use(express.json())

 const client = new Client ({
    host : 'localhost',
    port : 5432,
    database:'test',
    user : 'postgres',
    password : process.env.POSTGRESS_PASS
 })

 client.connect()

 app.post('/signup', async (req, res) => {
    const {username, password,email} = req.body;
    console.log("uuu",username,password,email)
    const {city,country,pincode} = req.body

    try {
        const insertQuery = `INSERT INTO users (username , email, password) VALUES ($1,$2,$3) RETURNING id`
        const insertAdressesQuery = `INSERT INTO adresses (city,country,pincode,user_id) values($1,$2,$3,$4)`
        
        await client.query("BEGIN;")  // Here the transaction starts
        const response = await client.query(insertQuery,[username,email,password])
        const userId = response.rows[0].id
        const responseAdresses = await client.query(insertAdressesQuery,[city,country,pincode,userId])
        await client.query("COMMIT;") // Here the transaction ends

        res.json({
            msg : "You have signed up"
        })
    } catch (error) {
        console.log("Error While Signup",error)
        res.json({
            msg : "Error while signing up"
        })
    }
 })

// Get data from two tables without using join 
app.get('/metadata', async (req,res) => {
    const id = req.query.id;

    const query1 =  `select * from users where id=$1`
    const response = await client.query(query1,[id])

    const query2 = `select * from adresses where user_id = $1`
    const AddressResponse = await client.query(query2,[id])

    res.json({
        user : response.rows[0],
        address : AddressResponse.rows[0]
    })
})

// Getting data of two table using join
app.get('/metadatajoin', async (req,res) => {
    const id = req.query.id;

    const query1 =  `
            select u.username, u.email, a.city, a.country, a.pincode from users u 
            join adresses a on u.id = a.user_id 
            where u.id=$1`
    const AddressResponse = await client.query(query1,[id])

    res.json({
        data : AddressResponse.rows
    })
})


app.listen(4000,()=>{
    console.log("Server Started")
})