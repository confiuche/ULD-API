import mongoose, {Schema} from "mongoose";

const palletInventSchema = new mongoose.Schema(
    {
        dateReceived:{
            type:String,
            required:[true, ""]
        },
        station:{
            type:String,
            required:[true, ""]
        },
        palletNo:{
            type:String,
            required:[true, ""]
        },
        remark:{
            type:String,
            required:[true, ""]
        },
        serviceable:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Serv",
            required:[true, ""]
        },
        stacks:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Stack",
            required:[true, ""]
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:[true,""]
        },
        build_up:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Buildup",
            required:[true,""]
        }
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);

const Invent = mongoose.Model("Invent", palletInventSchema)

export default Invent;