import mongoose, {Schema} from "mongoose";

const awbInventSchema = new mongoose.Schema(
    {
        airwaybill:{
            type:String,
            required:[true, "Airwaybill number is required"]
        },
        pieces:{
            type:String,
            required:[true, ""]
        },
        weight:{
            type:String,
            required:[true, ""]
        },
        origin:{
            type:String,
            required:[true, ""]
        },
        destination:{
            type:String,
            required:[true, ""]
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:[true,""]
        },
        cargoBuildUp:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"CargoBuildUp",
            required:[true,""]
        }
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);

const Awb = mongoose.Model("Awb", awbInventSchema)

export default Awb;