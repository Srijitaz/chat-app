import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
import generateToken_setCookie from "../utils/generateToken.js";
export const signup = async (req, res)=>{
    try{
        const {fullName, username, password, confirmPassword,gender}= req.body;
        if(password!== confirmPassword){
            return res.status(400).json({error : "Passwords don't match"});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser =  new User
        ({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic : gender === "male"? boyProfilePic : girlProfilePic
        })


        if(newUser){
             generateToken_setCookie(newUser._id,res);
            //Generate JWT token
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }
        else{
            rws.status(400).json({ error: "Invalid User Info"});
        }
        
    }catch(error){
        console.log("error in signup controller", error.message)
        res.status(500).json({error: "Internal Server error"})
    }
};
export const login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user =  await User.findOne({username});
        const isPwdCorrect = await bcrypt.compare(password, user?.password || "");
        
        if(!user || !isPwdCorrect ){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken_setCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        })
    } catch (error) {
            console.log("error in login controller", error.message)
            res.status(500).json({error: "Internal Server error"})
    }
};
export const logout = (req, res)=>{
   try {
     res.cookie("jwt","",{maxAge: 0})
     res.status(200).json({message: "Lgged out successful"});
   } catch (error) {
    console.log("Error in logout controller",error.message);
    res.status(500).json({error: "Internal Server Error"});
    
   }
};

