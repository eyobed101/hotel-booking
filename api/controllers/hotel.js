import hotel from '../models/hotel.js';

export const createHotel =async (req, res, next)=>{
    const newHotel = new hotel(req.body);

    try{
        const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        next(err);
    }
}
export const updateHotel =async (req, res, next)=>{
    try{
        const UpdatedHotel= await hotel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(UpdatedHotel);

    }catch(err){
        next(err);
    }
}
export const deleteHotel =async (req, res, next)=>{
    

    try{
        await hotel.findByIdAndDelete(req.params.id, {$set: req.body});
        res.status(200).json("Hotel has been deleted!");

    }catch(err){
        next(err);
    }
}
export const getHotel =async (req, res, next)=>{
    try{
        const GetHotel = await hotel.findById(req.params.id);
        res.status(200).json(GetHotel);

    }catch(err){
        next(err);
    }
}
export const getAllHotel =async (req, res, next)=>{
    try{
        const GetHotel = await hotel.find();
        res.status(200).json(GetHotel);

    }catch(err){
        next(err);
    }
}