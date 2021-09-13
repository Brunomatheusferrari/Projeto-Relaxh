const express = require("express");
const cors = require("cors");
const app = express();
const { Usuario } = require("./db/models")
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/", async (req,res) => {
    const users = await Usuario.findAll();

    console.log("All users:", JSON.stringify(users, null, 2));
});

app.listen(PORT, () => console.log("Servidor está rodando na porta: " + PORT));