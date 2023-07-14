import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `CONECTADO A MONGO DB EN SERVER ${conexion.connection.host} - EN EL PUERTO ${conexion.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(error);
    }
} 

export default conectarDB;