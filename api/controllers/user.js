import Users from '../models/user.js';



export const updateUsers =async (req, res, next)=>{
    try{
        const UpdatedUsers= await Users.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(UpdatedUsers);

    }catch(err){
        next(err);
    }
}
export const deleteUsers =async (req, res, next)=>{
    

    try{
        await Users.findByIdAndDelete(req.params.id, {$set: req.body});
        res.status(200).json("Users has been deleted!");

    }catch(err){
        next(err);
    }
}
export const getUsers =async (req, res, next)=>{
    try{
        const GetUsers = await Users.findById(req.params.id);
        res.status(200).json(GetUsers);

    }catch(err){
        next(err);
    }
}
export const getAllUsers =async (req, res, next)=>{
    try{
        const GetUsers = await Users.find();
        res.status(200).json(GetUsers);

    }catch(err){
        next(err);
    }
}