import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
  bio: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "thread",
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "community",
    },
  ],
});

const Community =
  mongoose.models.community || mongoose.model("community", communitySchema);

export default Community;
