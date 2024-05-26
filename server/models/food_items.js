import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    CategoryName: {
      type: String,
    },
    name: {
      type: String,
    },
    imgPath: {
      type: String,
    },
   options: {
      type: Array,
    },
   description: { 
    type: String,
   }
  },
);

const food_items = mongoose.model("food_items", dataSchema);
export default food_items;