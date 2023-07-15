import mongoose from "mongoose";

const traderSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        edad:{
            type:Number,
            required:true,
            trim:true
        },
        nacionalidad:{
            type:String,
            required:true,
            trim:true
        },
        presupuestoFiat:{
            type:Number,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
) 

const trader = mongoose.model("trader",traderSchema,"trader");

export default trader;