const userAccount_model = require("../models/userAccountModel")
const bcrypt = require("bcrypt")

const getUserAccount = async(req,res)=>{
     res.json({msg:"hello i am get req"} )
}

const getSingleUserAccount = async(req,res)=>{

}


// @Request   POST
// @Route     /api/useraccount/

const createUserAccount = async(req,res)=>{
   try {
    // destructureing the req from user
    const {username,useremail,userpassword,userrole} = req.body;

    console.log("req.file contains" , req.file)
    console.log("req.file contains buffer" , req.file.buffer)

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Ensures that the email address is in a valid format.
    const nameRegex = /^[A-Za-z\s]+$/;   // Ensures that the name contains only letters and spaces, disallowing numbers and special characters.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //includes at least one lowercase letter, one uppercase letter, one digit, and one special character, and is at least 8 characters long.

    // Validation checks
    const nameCheck = nameRegex.test(username);
    const emailCheck = emailRegex.test(useremail);
    const passwordCheck = passwordRegex.test(userpassword);
      
    if(!nameCheck)
    {
        res.status(400).json({msg: "Invalid username. Only letters and spaces are allowed." }) 
    }
    if(!emailCheck)
    {
        res.status(400).json({msg: "Invalid email address."}) 
    }
    if(!passwordCheck)
        {
        res.status(400).json({msg:"Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."}) 
        }
        if(!req.file){
            return res.status(401).json({error:"Please Select a Profile Picture"})
        }
        
    // checking user exist if exist than passing a ERROR in json
    const CheckUserExistance =await userAccount_model.findOne({useremail});
    if(CheckUserExistance) return res.status(400).json({msg:"Email already exist's!"});

    // hashing the password using bcrypt
    const saltRound = await bcrypt.genSalt(10);
    const hash_Password = await bcrypt.hash(userpassword,saltRound);

    // creating the user using memory storage
    // const createUser = await userAccount_model.create({username,useremail,userpassword:hash_Password,userrole,userimage:req.file.buffer})
    
    // creating the user using disk storage
    const createUser = await userAccount_model.create({username,useremail,userpassword:hash_Password,userrole,userimage:req.file.filename})

    res.status(201).json({ msg: "User registered successfully" });
    
   } catch (err) {
        res.status(500).json({msg:"user Registration failed",error:err.message});
   }
}

const updateUserAccount = async(req,res)=>{

}

const deleteUserAccount = async(req,res)=>{

}

module.exports = {
    getSingleUserAccount,
    getUserAccount,
    createUserAccount,
    updateUserAccount,
    deleteUserAccount   
}