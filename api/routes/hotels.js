import express from 'express';
// import hotel from '../models/hotel.js';
// import createHotel from '../controllres/hotel.js';
import {createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

// CREATE
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);
// GET ALL

router.get("/", getAllHotel);



export default router