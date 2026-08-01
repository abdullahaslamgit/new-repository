const userService = require("../services/userService");


const getUsers = (req,res)=>{
    res.json(
        userService.getUsers()
    );
};


const getUser = (req,res)=>{

    try{

        const user = userService.getUser(
            req.params.id
        );

        res.json(user);

    }catch(error){

        res.status(404).json({
            message:error.message
        });

    }
};


const createUser = async(req,res,next)=>{

    try{

        const {name}=req.body;

        const user = await userService.createUser(name);

        res.status(201).json(user);


    }catch(error){

        next(error);

    }

};

const updateUser = (req,res)=>{

    try{

        const user = userService.updateUser(
            req.params.id,
            req.body.name
        );

        res.json(user);

    }catch(error){

        res.status(404).json({
            message:error.message
        });

    }
};


const deleteUser = (req,res)=>{

    try{

        const result = userService.deleteUser(
            req.params.id
        );

        res.json(result);

    }catch(error){

        res.status(404).json({
            message:error.message
        });

    }
};


module.exports={
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};