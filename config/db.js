import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://pravesh182003:Pravesh182002@cluster0.skzwzny.mongodb.net/food-order").then(()=>console.log("DB Connected"));

}



