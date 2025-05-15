import mongoose from "mongoose";


const connectToDB = async() => {
  try {
    await mongoose.connect('mongodb+srv://saisurya015:saisurya2025@cluster0.pe06wdp.mongodb.net/')
    console.log('connected to mongodb');
  } catch(error) {
    console.log(error);
  }
}

export default connectToDB;

