const userModel = require("../model/userModel");


// get all collection
const all_Data = async (req,res) => {
    try {
        const user =await userModel.find();
        res.json(user);
        console.log('All Products');
    } catch (e) {
        console.log(e);
        
    }

};

//  get a single collection
const singlel_Data = async(req,res) => {
    try {
        const user =await userModel.findById(req.params.userId);
        res.json(user);
        console.log('Single Products');
    } catch (e) {
        console.log(e);
        
    }
};

//add a single data
const add_single_Data = async (req,res) => {
console.log("inside Post Function");
const addData = new userModel({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    _id: req.body._id
});
const addValue = await addData.save();
res.send("Send....");
console.log("Data Added.....");



};


//edit a sigle data
const edit_single_Data = async (req,res) => {
    console.log("inside Post Function");
    const edit_data = new userModel({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        _id: res.body._id
    });
    const editValue = await edit_data.save();
    res.json(editValue);
    console.log("Data Added.....");
    userModel.findByIdAndUpdate({_id: req.params.userId},edit_data)
};

// delete a single data
const delete_single_Data = (req,res) => {}
 

module.exports = {
    all_Data,
    singlel_Data,
    add_single_Data,
    edit_single_Data,
    delete_single_Data
};