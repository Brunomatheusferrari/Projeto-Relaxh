const express = require("express");
const cors = require("cors");
const app = express();
const { Usuario } = require("./db/models")
const PORT = process.env.PORT || 3001;

const usersRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const erroHandler = require("./middlewares/erroHandler");

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

app.use(erroHandler);

app.listen(PORT, () => console.log("Servidor está rodando na porta: " + PORT));