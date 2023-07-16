import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface UserType {
  username: string;
  email: string;
  password: string;
  avatar?: string;
}
const UserSchema = new Schema<UserType>(
  {
    username: { type: String, unique: true, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.User<UserType> ||
  mongoose.model("User", UserSchema);
