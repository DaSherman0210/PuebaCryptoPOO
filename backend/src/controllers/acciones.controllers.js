import accion from "../models/Acciones.js";

const getAcciones = async (req,res) => {
    try {
        const acciones = await accion.find();
        res.json(acciones);   
    } catch (error) {
        console.log(error.message);
    }   1
}

const getAccion = async (req,res) => {
    try {
        const acciones = await accion.findOne({_id:req.params.id});
        res.json(acciones);
    } catch (error) {
        console.log(error);
    }
}

const postAcciones = async (req,res) => {
    const acciones = new accion(req.body);
    try {
        const nuevaAccion = await acciones.save();
        res.json(nuevaAccion);
    } catch (error) {
        console.log(error);
    }
}

const deleteAcciones = async (req,res) => {
    try {
        await accion.deleteOne({_id:req.params.id});
        res.status(204).send();        
    } catch (error) {
        console.log(error);
    }
}

const updateAcciones = async (req,res) => {
    try {
        const acciones = await accion.findOne({_id:req.params.id});

        if (req.body.nombre) {
            acciones.nombre = req.body.nombre;
        }

        if (req.body.tipoAccion) {
            acciones.tipoAccion = req.body.tipoAccion;
        }

        if (req.body.descripcion) {
            acciones.descripcion = req.body.descripcion;
        }

        await acciones.save();
        res.send(acciones)
    } catch (error) {
        console.log(error);
    }
}

export {getAcciones,getAccion,postAcciones,deleteAcciones,updateAcciones};