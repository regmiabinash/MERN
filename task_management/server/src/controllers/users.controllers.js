import User from "../models/user.model.js";
export const getUsers = async(req, res) => {
  try{
    const users = await User.find()
     res.status(200).json({
    message: "User fetched",
    data: users,
    success: true,
  });
  }catch(error){
    next(error)
  }
};

export const create = (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: "User created",
    data: req.body,
  });
};

export const update = async (req, res,next) => {
 try{
   // get id
  const id = req.params.userId;
  const {first_name, last_name}= req.body;
  // get  by id
  const user =  await User.findOne({_id:id})
  if(!user){
    next({
      message:'User not found',
      status: 404
    })
    return
  }
  // update user
  if(first_name){
    user.first_name = first_name
  }
  if(last_name){
    user.last_name = last_name
  }

  // save
  await user.save()

  res.status(200).json({
    message: "user updated" + " " + id + 'updated',
    data: user
  });
 }catch(error){
  next(error)
 }
};

export const getByid = async(req, res,next) => {
  try{
    const id = req.params.id;

    const user = await User.findById(id)
    // const  user = await User.findOne({email:email})

    if(!user){
      next({
        status:404,
        message: 'user not found'
      })
      return
    }
    res.status(200).json({
    message: "get user by id ${id}",
    data: user
  });
  }catch(error){
    next(error)
  }
};

export const remove = async(req, res, next) => {
  try{

    const id = req.params.id;
    const user = await User.findOne({_id:id});
    if(!user){
      next({
        message:'User not found',
        status:400
      })
      return
    }

    await user.deleteOne();

    res.status(200).json({
    message: `id: ${req.params.id} deleted`,
    data: null
  });
  }catch(error){
    next(error)
  }
};