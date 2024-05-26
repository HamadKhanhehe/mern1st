import foodCategory from "../models/foodCategory.js";
import food_items from "../models/food_items.js";

export const getData = async (req,res) => {
    try{
       
     const data = await food_items.find();
const catData = await foodCategory.find();
// console.log({foodData: data, foodCat: catData});
res.send([ data, catData]);
    } catch (error) {
console.error(error.message);
res.send("server error")
    } 
}




