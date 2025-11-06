import express from "express";
import "dotenv/config";
import UseRoutes from "./domains/users/routes.js";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use("/users", UseRoutes);

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});