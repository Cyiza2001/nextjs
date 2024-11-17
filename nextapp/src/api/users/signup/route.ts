import {connect} from "../../../dbConfig/dbConfig";
import User from "../../../app/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async function POST(req: NextRequest) {

    try{
        const reqBody = await req.json();
        const {username, email, password} = reqBody
        // Check if user already exists
        const userExists = await User.findOne({email});
        if(userExists) return NextResponse.json({error: "User already exists"},{status : 400})
        
        //Add a user in the database
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();

        return NextResponse.json({message: "User created successfully"},{status : 201})
        

    }
    catch(err: any) {
        return NextResponse.json({error: err.message},{status : 500})
    }
}