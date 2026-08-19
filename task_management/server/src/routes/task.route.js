import express from "express";
import { getAll, getById, create, update, remove} from "../controllers/task.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

// GET all tasks
router.get("/",authenticate,getAll);

// GET task by ID
router.get("/:id",authenticate, getById);

// create
router.post("/",authenticate,create);

// update
// put
router.put("/:id",authenticate,update);

// delete
router.delete("/:id",authenticate, remove);

// pin task
// router.get("/:id", pinTask)

// get All pinned task
// router.get("/")

export default router;

