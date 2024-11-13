import mongoose from "mongoose";

export async function connect (){
    try{
mongoose.connect(process.env.MONGO_URL!)
const connection = mongoose.connection
connection.on("connected",()=>{
    console.log("MongoDB Connected Successfully")
})
connection.on("error", (err)=>{
console.log("MongoDB Error. Please make sure MongoDB is running" + err);
})
process.exit()
    }
    catch(Error){
        console.log("something went wrong")
        console.log(Error);
    }
}