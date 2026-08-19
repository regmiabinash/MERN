import Task from "../models/task.model.js";

// GET ALL TASKS
export const getAll = async (req, res, next) => {
  try {
    const user = req.user.id
    const tasks = await Task.find({user:user}).populate('user');
    res.status(200).json({
      message: "Tasks fetched",
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

// GET TASK BY ID
export const getById = async (req, res, next) => {
  try {
    const user = req.user.id
    const { id } = req.params;

    const task = await Task.findOne({_id:id,user}).populate('user');

    if (!task) {
      next({
        message: "Task not found",
        status: 404,
      });
      return
    }

    res.status(200).json({
      message: `Task ${id} fetched`,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE TASK
export const create = async (req, res, next) => {
  try {
    const user = req.user.id
    const {title, text, priority, pinned} = req.body
    console.log(user)
        
        if(!title){
            next({
                message:'Task title description is required',
                status:400
            })
        }

        if(!text){
            next({
                message:'Task text description is required',
                status:400
            })
        }

        if(!user){
            next({
                message:'user is required',
                status:400
            })
        } 
    const task = await Task.create({title, text, priority, user, pinned});

    res.status(201).json({
      message: "Task created",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE TASK
export const update = async (req, res, next) => {
  try {
    const user = req.user.id
    const {title, text, priority, pinned} = req.body
    const { id } = req.params;

    const task = await Task.findOne({_id:id,user:user});

    if (!task) {
      next({
        message: "Task not found",
        status: 404,
      });
      return
    }

    if(title){
        task.title = title
    }
    if(text){
        task.text=text
    }
    if(priority){
        task.priority=priority
    }
    if(pinned){
        task.pinned=pinned
    }

    
    await task.save();

    res.status(200).json({
      message: `Task ${task_id} updated`,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE TASK
export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
     const user = req.user.id
    
    const task = await Task.findOne({_id:id, user:user});

    if (!task) {
     next({
        message: "Task not found",
        status: 404,
      });
      return
    }

    await task.deleteOne();

    res.status(200).json({
      message: `Task ${task_id} deleted`,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

// pinned task

// get all pinned task
