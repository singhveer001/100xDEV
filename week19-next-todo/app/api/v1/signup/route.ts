import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(req : NextRequest){

  try {
      //req.body?
      const data = await req.json() // basically here we get both the data req.body.username, req.body.password
      console.log("FDFGDFH",data)
      await prismaClient.user.create({
          data : {
              username : data.username,
              password : data.password
          }
      })
      return NextResponse.json({
          message : "You have been signed up"
      })
  } catch (error) {
    console.log(error)
    NextResponse.json({
        msg : "Error while creating user"
    })
  }
}