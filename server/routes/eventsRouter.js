import express from 'express';
const router = express.Router();
import Event from '../mongo.js';


router.get("/get-events", async (req, res) => {
    const events = await Event.find();
    return res.json(events);
});


router.get("/get-events/:category", async(req,res) => {
    try{
    const {category} = req.params;
    const events = await Event.find({category : { $regex : new RegExp(category,'i')}})
    return res.status(202).json(events);
    }
    catch(error){
        console.log(error);
        return res.status(505).json("Internal Server Error");
    }
})

router.post("/add-event", async (req, res) => {

    try {
        const event = await Event.create({ ...req.body, ruleBook: req.body.ruleBook.split(".") });
        res.redirect("/admin");
        return "Success";
    }
    catch (error) {
        console.log(error);
    }
});

router.get("/edit-event/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findOne({_id : id });
        if (event) {
            return res.render("EditEvent.ejs", { event: event });
        } else {
            return res.send("Sorry Event Not Found! Please Check 'eid' in URL.");
        }
    }
    catch (error) {
        console.log(error.message);
    }
});

router.get("/delete-event/:id", async (req, res) => {
    const { id } = req.params;
    await Event.deleteOne({_id : id });
    res.redirect("/admin");
});

router.post("/save-event/:id", async (req, res) => {
    const { id } = req.params;
    let event = await Event.findOne({_id : id });
    if (event) {
        console.log(event._id);
        const updateEvent = await Event.updateOne({_id:id }, { ...req.body, ruleBook: req.body.ruleBook.split(".") }, { new: true });
        console.log(updateEvent._id);
        return res.status(202).json(updateEvent);
    } else {
        res.send("Sorry, Event Not Found! Please check 'eid' in URL.");
    }
    res.redirect("/");
});


router.get("/get-event-info/:id", async (req, res) => {
    const { id } = req.params;
    let event = await Event.findOne({_id : id });
    if (event) {
        res.json(event);
    } else {
        res.send("Event not Found!");
    }
});


export default router;