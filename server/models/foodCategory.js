import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    CategoryName: String
  }
);

const foodCategory = mongoose.model("foodCategory", catSchema);
export default foodCategory;