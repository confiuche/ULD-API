import mongoose, {Schema} from "mongoose";

const serviceSchema = new mongoose.Schema(
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
        date:{
            type:String,
        },
        remark:{
            type:String,
            required:[true, ""]
        },
        photo:{
            type:String,
        },
        palletInventory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Invent",
            required:[true, ""]
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:[true,""]
        },
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);

const Serv = mongoose.Model("Serv", serviceSchema)

export default Serv;