import tipoMonedas from "../models/TipoMoneda.js";

const getTipoMonedas = async (req,res) => {
    try {
        const tipoMoneda = await tipoMonedas.find();
        res.json(tipoMoneda);
    } catch (error) {
        console.log(error);
    }
}

const getTipoMoneda = async (req,res) => {
    try {
        const tipoMoneda = await tipoMonedas.findOne({_id:req.params.id});
        res.json(tipoMoneda);
    } catch (error) {
        console.log(error);
    }
}

const insertTipoMoneda = async (req,res) => {
    const tipoMoneda = new tipoMonedas(req.body);
    try {
        const nuevaTipoMoneda = await tipoMoneda.save();
        res.json(nuevaTipoMoneda);
    } catch (error) {
        console.log(error);
    }
}

const deleteTipoMoneda = async (req,res) => {
    try {
        await tipoMonedas.deleteOne({_id:req.params.id})
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateTipoMoneda = async (req,res) => {
    try {
        const tipoMoneda = await tipoMonedas.findOne({_id:req.params.id});
        
        if (req.body.nombre) {
            tipoMoneda.nombre = req.body.nombre;
        }
        
        if (req.body.descripcion) {
            tipoMoneda.descripcion= req.body.descripcion;
        }

        await tipoMoneda.save();
        res.send(tipoMoneda);

    } catch (error) {
        console.log(error);
    }
}

export {getTipoMonedas,getTipoMoneda,insertTipoMoneda,deleteTipoMoneda,updateTipoMoneda};