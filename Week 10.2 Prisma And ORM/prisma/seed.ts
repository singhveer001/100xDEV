import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();

async function createDummyUser (){
    await client.user.create({
        data : {
            username : "example",
            password : "example@1",
            age : 22,
            todos : {
                create : {
                    title : "Hello",
                    description : "Testing",
                    done :  false,
                }
            }
        }
    })
}

createDummyUser()