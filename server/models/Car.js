import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    wheelbase: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    sellfyLink: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    templateUrl: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", CarSchema);
