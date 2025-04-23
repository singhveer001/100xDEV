 import { Client } from "pg";
 import dotenv from 'dotenv'
 dotenv.config()

 const client = new Client ({
    host : 'localhost',
    port : 5432,
    database:'test',
    user : 'postgres',
    password : process.env.POSTGRESS_PASS
 })
 client.connect()

 async function createUserTable(){
  try {
    const result = await client.query(`
        create table users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );    
    `)
    console.log("Table Created Successfully")
    console.log(result)
  } catch (error) {
    console.log("Error While Creating table",error)
  } finally {
    await client.end()
  }
 }

//  createUserTable();

 async function insertData(username:string,password:string,email:string){
    const data = await client.query(`insert into users (username,email,password) values ($1,$2,$3) returning *`,[username ,email, password])
    if(data.rows.length > 0){
        console.log("Inserted:", data.rows[0]);
        console.log("Inserted:", data.rows[1]);
        return data.rows[0];
    }else{
        console.log("No data inseted")
        return null;
    }

 }
 insertData('Vaibhav','Vaibhav@1','Vaibhav@gmail.com').catch(console.error)

 async function getAllData (){
    const result = await client.query(`select * from users`);
    if (result) {
        console.log(result.rows)
    } else {
        console.log("No data found")
    }
 }
 getAllData()

async function updateData(username: string, email: string, password?: string) {
    try {
      let query = `UPDATE users SET username = $1`;
      const values: any[] = [username];
      let paramIndex = 2;
  
      if (password) {
        query += `, password = $${paramIndex}`;
        values.push(password);
        paramIndex++;
      }
  
      query += ` WHERE email = $${paramIndex} RETURNING *`;
      values.push(email);
  
      const result = await client.query(query, values);
  
      if (result.rows.length > 0) {
        console.log("Updated:", result.rows[0]);
        return result.rows[0];
      } else {
        console.log("No user found with that email.");
        return null;
      }
  
    } catch (err: any) {
      console.error("Update error:", err.message);
      return null;
    }
  }
  
  
 updateData('sakhi',"Rahul@1")