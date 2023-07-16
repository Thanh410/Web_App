import mongoose from "mongoose";

async function Connect() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb+srv://inode410:psfedgpigiOkrxLu@bookingapp.oklhizx.mongodb.net/Web_App"
    );
    console.log("Connect Successfully");
  } catch (err: any) {
    console.log("Connect failure");
  }
}

export default Connect;
