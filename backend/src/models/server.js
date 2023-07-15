import express from "express";
import cors from "cors";
import accionesRouter from "../routes/acciones.routes.js"
import monedasRouter from "../routes/moneda.routes.js"
import tipoMonedasRouter from "../routes/tipoMoneda.routes.js";
import traderRouter from "../routes/trader.routes.js";

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.accionesPath = "/api/acciones";
        this.monedasPath = "/api/monedas";
        this.tipoMonedaPath = "/api/tipoMoneda"; 
        this.traderPath = "/api/trader";

        //* Middlewares
        this.middlewares();

        //* Routing
        this.routes();
    }

    middlewares(){
        //? Configuracion del cors
        this.app.use(cors());

        //? Directorio Publico
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.accionesPath,accionesRouter);
        this.app.use(this.monedasPath,monedasRouter);
        this.app.use(this.tipoMonedaPath,tipoMonedasRouter);
        this.app.use(this.traderPath,traderRouter);
    }

    listener(){
        this.app.listen(this.port , ()=>{
            console.log(`Server corriendo en el puerto ${this.port}`);
        })
    }

}

export default Server;