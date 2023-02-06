import express from 'express';
import { updateUsers, deleteUsers, getUsers,getAllUsers } from '../controllers/user.js';
import { verifyToken } from '../util/verifyToken.js';
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user you are authenticated!")
})

// UPDATE
router.put("/:id", updateUsers);
// DELETE
router.delete("/:id", deleteUsers);

// GET
router.get("/:id", getUsers);
// GET ALL

router.get("/", getAllUsers);


export default router