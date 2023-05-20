import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    surname:{
        type:String,
        required:[true, "Surname is required"]
    },
    othername:{
        type:String,
        required:[true, "Othername is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    profilephoto:{
        type:String
    },
    sex:{
        type:String
    },
    station:{
        type:String
    },
    department:{
        type:String
    },
    designation:{
        type:String
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["Admin", "Staff"],
        default:"Staff"
    },
    palletInventory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Invent"
        }
    ],
    awbInventory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Awb"
        }
    ],
    stacks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Stack"
        }
    ],
    build_Up:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Build"
        }
    ],
    serviceable:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Serv"
        }
    ],

},
{
    timestamps:true,
    toJSON:{virtuals:true}
}
);

const User = mongoose.model("User",userSchema);
export default User;