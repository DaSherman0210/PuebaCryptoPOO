import mongoose from "mongoose";

const monedasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        tipoMonedaPerteneciente:{
            type:String,
            required:true,
            trim:true
        },
        precio:{
            type:Number,
            required:true,
            trim:true
        },
        descripcion:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true
    }
);

const moneda = mongoose.model("moneda" , monedasSchema , "moneda");

export default moneda;