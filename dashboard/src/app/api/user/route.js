import connectToDB from "@/database";
import { NextResponse } from "next/server";


export async function Post(req) {
  try {
    await connectToDB()
    const {name, email} = await req.json();

    const newUser = await User.create({name, email})

    if(newUser) {
      return NextResponse.json({
        success: true,
        message: 'User registered',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'failed to registered user | Please try again',
      });
    }

  } catch(e) {
    console.log(e);
    
    return NextResponse.json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}