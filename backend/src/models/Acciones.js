import mongoose from "mongoose";

const accionesSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        tipoAccion:{
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
)
const accion = mongoose.model("acciones" , accionesSchema , "acciones")

export default accion;