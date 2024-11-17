import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "please enter a username"],
            unique: true
        },

        email: {
            type: String,
            required: [true,"please enter a email"],
            unique: true
        },

        password: {
            type: String,
            required: [true, "please enter a password"],
        
        },
      isVerified: {
        type: Boolean,
        default: false,
      },
      isAdmin:{
        type: Boolean,
        default: false,
      },
      forgotPasswordToken: String,
      forgotPasswordExpires: Date,
      verifyToken: String,  
      verifyTokenExpires: Date,

    }
)

const User = mongoose.model.users || mongoose.model('User', userSchema); 
export default User;               
