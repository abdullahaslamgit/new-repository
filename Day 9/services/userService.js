const userRepository = require("../repositories/userRepository");


const getUsers = async()=>{

    return await userRepository.getAllUsers();

};


const getUser = async(id)=>{

    const user = await userRepository.getUserById(id);


    if(!user){

        throw new Error("User not found");

    }


    return user;

};



const createUser = async(name)=>{


    return await userRepository.createUser({
        name:name
    });


};



const updateUser = async(id,name)=>{


    const user = await userRepository.updateUser(
        id,
        {
            name:name
        }
    );


    if(!user){

        throw new Error("User not found");

    }


    return user;

};



const deleteUser = async(id)=>{


    const user = await userRepository.deleteUser(id);


    if(!user){

        throw new Error("User not found");

    }


    return {
        message:"User deleted successfully"
    };


};


module.exports={

    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser

};