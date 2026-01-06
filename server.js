const express = require("express");
const path = require("path");

const app = express();

// Railway define el puerto en la variable PORT
const PORT = process.env.PORT || 3000;

// Sirve archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname));

// Ruta principal: entrega index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
