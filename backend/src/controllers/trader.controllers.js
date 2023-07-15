import trader from "../models/Trader.js";

const getTraders = async (req,res) => {
    try {
        const traders = await trader.find();
        res.json(traders)
    } catch (error) {
        console.log(error);
    }
}

const getTrader = async (req,res) => {
    try {
        const traders = await trader.findOne({_id:req.params.id})
        res.json(traders);
    } catch (error) {
        console.log(error);
    }
}

const postTrader = async (req,res) => {
    const traders = new trader(req.body);
    try {
        const newTrader = traders.save();
        res.json(newTrader);
    } catch (error) {
        console.log(error);
    }
}

const deleteTrader = async (req,res) => {
    try {
        await trader.deleteOne({_id:req.params.id})
        res.status(204).send();
    } catch (error) {
        console.log(error);
    } 
}

const updateTrader = async (req,res) => {
    try {
        const traders = await trader.findOne({_id:req.params.id})

        if (req.body.nombre) {
            traders.nombre = req.body.nombre;
        }

        if (req.body.edad) {
            traders.edad = req.body.edad;
        }

        if (req.body.nacionalidad) {
            traders.nacionalidad = req.body.nacionalidad;
        }

        if (req.body.presupuestoFiat) {
            traders.presupuestoFiat = req.body.presupuestoFiat;
        }

        await traders.save();
        res.send(traders);

    } catch (error) {
        console.log(error);
    }
}

export {getTraders,getTrader,postTrader,deleteTrader,updateTrader}