import mongoose, {Schema} from "mongoose";

const buildupSchema = new mongoose.Schema(
    {
        palletNo:{
            type:String,
            required:[true, ""]
        },
        airwaybill:{
            type:String,
            required:[true, "Airwaybill number is required"]
        },
        peice:{
            type:String,
            required:[true, ""]
        },
        weight:{
            type:String,
            required:[true, ""]
        },
        remark:{
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
        date:{
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:[true,""]
        },
        palletInventory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Invent",
            required:[true,""]
        },
        awbInventory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Awb",
            required:[true,""]
        },
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);

const Buildup = mongoose.Model("Buildup", buildupSchema)

export default Buildup;