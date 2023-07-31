const User = require("../model/userModel.js");

exports.home = (req, res) => {
  res.send("Hello World!");
};

exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
      });

   if(name > 2 || email !='@' || password > 8){
    console.log('Your password must be greater than 8 or your forgot @ on email');
throw new Error('Your password must be greater than 8 or your forgot @ on email')
    // res.status(404).send('Your password must be greater than 8 or your forgot @ on email')
   }


      res.status(201).json({
        sucess: true,
        message: "User created successfully",
        user,
      });

  } catch (error) {
    console.log("Error:",error);
    res.status(400).json({
      sucess: false,
      message: "Try again :Your password must be greater than 8 or your forgot @ on email !",
    });
  }
};

exports.userLogin = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const userdata = await User.findOne({email})
        if(userdata){
            if(userdata.password){
                res.status(200).json({message:"Your successfully login"})
            } else{
                res.status(400).json({message:"Your  password is wrong"})

            }

        }else{
            res.status(200).json({message:"Your don't have account"})

        }

    } catch (error) {
        console.log("Error:");
        res.status(400).json({
          sucess: false,
          message: "Something wrong in userActive sucess",
        });
    }

}