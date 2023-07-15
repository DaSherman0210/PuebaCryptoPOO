import mongoose from "mongoose";

const tipoMonedaSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
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
        timestamps:true
    }
);

const tipoMonedas = mongoose.model("tipoMoneda" , tipoMonedaSchema , "tipoMoneda");

export default tipoMonedas;