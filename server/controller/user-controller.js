import User from "../model/user-schema.js";


export const addUser = async(req,res) =>{
    const user = req.body;
    
    const validatedUser = new User(user);

    try {
        await validatedUser.save();
        res.status(201).json(validatedUser);
        // res.status(201).json({message:'insert new user', saveDate: validatedUser});
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const getUsers = async(req,res) =>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
        // res.status(200).json({message: 'get all the data', users: users});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}
export const getUser = async(req,res) =>{
    // console.log(req.params.id);
    try {
        // const user = await User.find({_id: req.params.id});
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        // res.status(200).json({message: 'get the data by id',user:user});
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const editUser = async(req, res) =>{
    let user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({_id : req.params.id},editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
export const deleteUser = async(req, res) =>{
    try {
        await User.deleteOne({_id : req.params.id});
        res.status(200).json({message: `user data is deleted sucessfully in particurlar id ${_id}`});
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}