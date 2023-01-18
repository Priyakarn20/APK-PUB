const userData = require('../models/user.model');

async function addUser(req,res){
    const user = new userData({
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    user.save()
    .then(result=>{
        res.status(200).json({
            message:"user details saved successfully",
            new_user: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:"try again",
            error: err
        })
    })
}

async function getUser(req,res){
    userData.find()
    .then(result=>{
        res.status(200).json({
            userData: result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
    })
}

async function getUserById(req,res){
    console.log(req.params.id);
    userData.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            user: result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
    })
}


async function deleteUser(req, res){
    console.log(req.params.id);
    userData.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.status(200).json({
            message:"user deleted successfully",
            result: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
    })
}

async function updateUser(req,res){
    console.log(req.params.id);
    userData.findByIdAndUpdate(req.params.id)
    .then(result=>{
        res.status(200).json({
            message:"user updated successfully",
            result: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
    })
}
module.exports = {addUser,getUser,getUserById,deleteUser,updateUser}