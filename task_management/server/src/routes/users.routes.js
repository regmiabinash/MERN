import express from "express";
import{create,getByid, remove, update, getUsers} from '../controllers/users.controllers.js';

const router = express.Router();



// CRUD users
router.get("/", getUsers);

// create
router.post("/", create);

// update
// put
router.put("/:userId", update);

// get user by id
//  /user/123
router.get("/:id", getByid);

// delete user
router.delete("/:id", remove);

export default router;