import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  username: { type: String, unique: true, require: true },
  content: { type: String, unique: true, require: true },
  image: { type: String, unique: true, require: true },
  desc: { type: String, unique: true, require: true },
  title: { type: String, unique: true, require: true },
});

export default mongoose.models.Posts || mongoose.model("Posts", PostsSchema);
