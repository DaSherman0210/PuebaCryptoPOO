import moneda from "../models/Moneda.js";

const getMonedas = async (req,res) =>{
    try {
        const monedas = await moneda.find();
        res.json(monedas);
    } catch (error) {
        console.log(error);
    }
}

const getMoneda = async (req,res) =>{
    try {
        const monedas = await moneda.findOne({_id:req.params.id});
        res.json(monedas) 
    } catch (error) {
        console.log(error);
    }
}

const postMonedas = async (req,res) => {
    const monedas = new moneda(req.body);
    try {
        const nuevaMoneda = await monedas.save();
        res.json(nuevaMoneda);
    } catch (error) {
        console.log(error);
    }
}

const deleteMonedas = async (req,res) => {
    try {
        await moneda.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateMonedas = async (req,res) => {
    try {
        const monedas = await moneda.findOne({_id:req.params.id})
        
        if (req.body.nombre) {
            monedas.nombre = req.body.nombre;
        }

        if (req.body.tipoMonedaPerteneciente) {
            monedas.tipoMonedaPerteneciente = req.body.tipoMonedaPerteneciente;
        }

        if (req.body.precio) {
            monedas.precio = req.body.precio;
        }

        if (req.body.descripcion) {
            monedas.descripcion = req.body.descripcion;
        }
        await monedas.save();
        res.send(monedas);
    } catch (error) {
        console.log(error);
    }
}

export {getMonedas,getMoneda,postMonedas,deleteMonedas,updateMonedas}