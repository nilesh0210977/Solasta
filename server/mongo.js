import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const eventSchema = new mongoose.Schema({
  title: String,
  category: String,
  img: String,
  venue: String,
  date: String,
  time: String,
  prizePool: String,
  registrationFee: String,
  ruleBook:{
    type:Array,
  },
  description:{
    type : Array
  },
  type: String,
  noOfSlots: Number,
  span: String,
  link: String,
});
const Event = mongoose.model("Event", eventSchema);


export default Event;
